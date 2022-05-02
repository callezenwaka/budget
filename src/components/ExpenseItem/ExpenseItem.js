import ExpenseDate from "../ExpenseDate/ExpenseDate";
import ExpenseCard from "../ExpenseCard/ExpenseCard";
import './ExpenseItem.css'

const className = 'expense-item';

function ExpenseItem(props) {

  return (
    <ExpenseCard className={`${className}`}>
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className={`${className}__description`}>
        <h2>{props.title}</h2>
        <div className={`${className}__price`}>${props.amount}</div>
      </div>
    </ExpenseCard>
  );
}

export default ExpenseItem;