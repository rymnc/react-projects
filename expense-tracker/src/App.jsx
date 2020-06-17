import React from "react";
import TotalBalance from "./components/TotalBalance";
import IncomeExpense from "./components/IncomeExpense";
import AddMoney from "./components/AddMoney";

import Entries from "./components/Entries";
import "./App.css";
import { ExpenseContextProvider } from "./context/expenseContext";

const App = () => {
  return (
    <ExpenseContextProvider>
      <div>
        <TotalBalance />
        <IncomeExpense />
        <AddMoney />
        <Entries />
      </div>
    </ExpenseContextProvider>
  );
};

export default App;
