import React, { useState } from 'react';
import './ExpensesFilter.css';

const className = 'expenses-filter';

const ExpensesFilter = (props) => {
  const [years] = useState(
    () => {
      const items = [];
      const currentYear = new Date().getFullYear();
      const startYear = currentYear - 5;
      for(let i = startYear; i <= currentYear; i++) {
        items.push(i);
      }
      return items;
  })
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className={`${className}`}>
      <div className={`${className}__control`}>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          {
            years.map((year) => {
              return (
                <option value={year} key={year}>{year}</option>
              );
            })
          }
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;