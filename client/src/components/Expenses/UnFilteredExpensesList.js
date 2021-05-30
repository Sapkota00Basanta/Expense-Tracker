import downloadFile from 'downloadjs';

import ExpenseItem from "./ExpenseItem";
import "./UnFilteredExpensesList.css";
import {baseURL} from '../../env.json';


const UnFilteredExpensesList = (props) => {
  const url = `${baseURL}/api/expenses`;

  const exportHandler = async () => {
    const res = await fetch(`${url}/download`);
    const blob = await res.blob();
    downloadFile(blob, 'test.csv');
  }
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback"> No Expenses Found.</h2>;
  }

  return (
    <ul className="expenses-list">
      <h2> Total Expenses </h2>
      <button onClick={exportHandler}>Export</button>
      {props.expenses.map((expense) => (
        <ExpenseItem
          key={expense._id}
          title={expense.title}
          amount={expense.amount}
          category={expense.category}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default UnFilteredExpensesList;
