import React, { useState } from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import ExpensesChart from "../ExpensesChart/ExpensesChart";
import ExpenseCard from '../ExpenseCard/ExpenseCard';
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import './Expenses.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState(
    () => new Date().getFullYear()
  );

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <ExpenseCard className="expenses">
      <ExpensesFilter 
        selected={filteredYear}
        onChangeFilter={filterChangeHandler} 
      />
      <ExpensesChart expenses={filteredExpenses} />
      {filteredExpenses.length === 0 && <p>No content!</p>}
      {
        filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })
      }
    </ExpenseCard>
  );
}

export default Expenses;