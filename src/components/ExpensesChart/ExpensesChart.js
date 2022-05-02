import React from 'react';
// import { DATA_POINTS } from "../../database/database";
import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
  // const [dataPoints, setDataPoints] = useState(DATA_POINTS);
  const dataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
    dataPoints[expenseMonth].value += expense.amount;
  }


  return <Chart dataPoints={dataPoints} />;
};

export default ExpensesChart;