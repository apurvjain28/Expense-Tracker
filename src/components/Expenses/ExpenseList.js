import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  const content = <p>No expenses found</p>;

  if (props.filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">{content}</h2>;
  }

  if (props.filteredExpenses.length > 0) {
    return (
      <ul className="expenses-list">
        {props.filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          ></ExpenseItem>
        ))}
      </ul>
    );
  }
};

export default ExpenseList;
