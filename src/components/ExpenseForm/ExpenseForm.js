import React, { useState } from 'react';
import './ExpenseForm.css';

const className = 'new-expense';

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date)
    }

    props.onSaveExpenseData(expenseData);

    setTitle('');
    setAmount('');
    setDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={`${className}__controls`}>
        <div className={`${className}__control`}>
          <label htmlFor='title'>Title</label>
          <input 
            type='text' 
            id='title' 
            value={title}
            onChange={titleChangeHandler} 
          />
        </div>
        <div className={`${className}__control`}>
          <label htmlFor='amount'>Amount</label>
          <input 
            type='number' 
            id='amount' 
            min='0.01' 
            step='0.01' 
            value={amount}
            onChange={amountChangeHandler} 
          />
        </div>
        <div className={`${className}__control`}>
          <label htmlFor='date'>Date</label>
          <input 
            type='date' 
            id='date' 
            min='2019-01-01' 
            max='2022-12-31'
            value={date}
            onChange={dateChangeHandler} 
          />
        </div>
      </div>
      <div className={`${className}__actions`}>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;