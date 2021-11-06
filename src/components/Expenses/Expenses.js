import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const filterYearHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpensesList = props.expenses.filter((expense) => {
    const year = expense.date.getFullYear().toString();
    return year === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filterYear}
        onChangeFilterYear={filterYearHandler}
      />
      <ExpensesChart filteredExpenses={filteredExpensesList} />
      <ExpenseList filteredExpenses={filteredExpensesList} />
    </Card>
  );
};

export default Expenses;
