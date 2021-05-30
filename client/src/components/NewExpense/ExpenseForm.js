import { useState } from "react";
import { useDispatch } from "react-redux";

import { createExpense } from "../../actions/expenses";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredCategory, setEnteredCategory] = useState("");

  const dispatch = useDispatch();

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const categoryChangeHandler = (event) => {
    setEnteredCategory(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      category: enteredCategory,
      date: new Date(enteredDate).getTime(),
    };

    dispatch(createExpense(expenseData));

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredCategory("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            name="title"
            id="title"
            type="text"
            // className="new-expense__control input"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            name="amount"
            id="amount"
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            // className="new-expense__control input"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Category</label>
          <input
            name="category"
            id="category"
            type="text"
            value={enteredCategory}
            // className="new-expense__control input"
            onChange={categoryChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            name="date"
            id="date"
            type="date"
            min="2020-01-01"
            max="2024-12-30"
            value={enteredDate}
            // className="new-expense__control input"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
