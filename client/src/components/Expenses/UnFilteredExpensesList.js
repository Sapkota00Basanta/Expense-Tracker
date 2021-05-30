// import {useDispatch} from 'react-redux';

// import {download} from '../../actions/expenses';
import ExpenseItem from "./ExpenseItem";
import "./UnFilteredExpensesList.css";

const UnFilteredExpensesList = (props) => {
  // const dispatch = useDispatch();

  // const exportHandler = () => {
  //   dispatch(download());
  // }
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback"> No Expenses Found.</h2>;
  }

  return (
    <ul className="expenses-list">
      <h2> Total Expenses </h2>
      {/* <button onClick={exportHandler}>Export</button> */}
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
