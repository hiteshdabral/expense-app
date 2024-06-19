import React, { useEffect } from "react";
import { ExpensesList } from "./ExpensesList";
import { ExpensesForm } from "./ExpensesForm";
import { startGetExpenses } from "../actions/expenses-actions";
import { useSelector, useDispatch } from "react-redux";

export const ExpensesContainer = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses);
  useEffect(() => {
    dispatch(startGetExpenses());
  }, [dispatch]);
  return (
    <>
      <div>
        <b>Expenses Length {expenses.data.length}</b>
      </div>
      <div className="col-md-8">
        <ExpensesList expenses={expenses.data} />
      </div>
      <div className="col-md-4">
        <ExpensesForm />
      </div>
    </>
  );
};
