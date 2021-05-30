import { useState } from "react";
import { useSelector } from "react-redux";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import UnFilteredExpensesList from "./UnFilteredExpensesList";
import "./Expenses.css";

const Expenses = () => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const expenses = useSelector((state) => state.expenses);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses
    ? expenses.filter((expense) => {
        return new Date(expense.date).getFullYear().toString() === filteredYear;
      })
    : [];

  return (
    <div>
      <Card className="expenses">
        <UnFilteredExpensesList expenses={expenses} />
      </Card>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
