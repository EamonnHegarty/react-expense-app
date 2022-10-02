import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";


const ExpensesList = props => {
    //store jsx content in variables
  //if the expenses are empty return message
  if(props.items.length === 0){
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>
  }

  //otherwise update it with expense items
  return <ul className="expenses-list">
    {props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}
  </ul>
};

export default ExpensesList; 