import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseData = (inputedExpenseData) => {
    const expenseData = {
      ...inputedExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSavaExpenseData={saveExpenseData} />
    </div>
  );
};

export default NewExpense;
