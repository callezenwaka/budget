import React, { useState } from 'react';
// import logo from './logo.svg';
import { EXPENSES } from "./database/database";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import './App.css';

const App = () => {
  const [expenses, setExpenses] = useState(EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  };

  return (
    <div className="App">
      <header className="App-header">
        Home
      </header>
      <div>
        <h2>Budget Tracker Application</h2>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses expenses={expenses}></Expenses>
      </div>
    </div>
  );
}

export default App;
