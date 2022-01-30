import { createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//initial state
const initialState = {
    transactions:[
        // { id: 1, text: 'Pietūs', amount: -20 },
        // { id: 2, text: 'Sutartis su BIT', amount: 300 },
        // { id: 3, text: 'Knygos', amount: -10 },
        // { id: 4, text: 'Kursai', amount: 150 }
    ]
}
//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

//actions 
function deleteTransaction(id){
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    });
}
function addTransaction(id){
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: id
    });
}
    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}