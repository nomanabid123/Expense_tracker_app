import Header from "./components/header"
import Aux from "./components/HigherOrder/Auxiliry"
import { Balance } from "./components/Balance.jsx"
import IncomeExpense from "./components/IncomeExpense.jsx"
import TransactionList from "./components/TransactionList"
import AddTransaction from "./components/AddTransaction"
import { GlobalProvider } from "./Context/GlobalState"
import './App.css';



function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
