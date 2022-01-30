import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Įveskite operaciją</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder="Įveskite operacijos pavadinimą..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Suma <br />
            (neigiama - išlaidos, teigiama - pajamos)</label
          >
          <input type="number" value={amount} 
                    onChange={(e) => setAmount(e.target.value)}/>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
