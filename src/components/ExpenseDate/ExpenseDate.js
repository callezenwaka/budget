import './ExpenseDate.css';

const className = 'expense-date';

function ExpenseDate(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className={`${className}`}>
      <div className={`${className}__month`}>{month}</div>
      <div className={`${className}__year`}>{year}</div>
      <div className={`${className}__day`}>{day}</div>
    </div>
  );
}

export default ExpenseDate;