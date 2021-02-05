import React,{useContext} from 'react'

import {GlobalContext} from "../Context/GlobalState"
const IncomeExpense = () => {
    const context = useContext(GlobalContext)
    let amount= context.transactions.map(transaction=>transaction.amount)
    let income = amount.reduce((sum,i)=>(i>0?sum+i:sum+0),0);
    let expense = amount.reduce((sum,i)=>(i<0?sum+i:sum+0),0);
  
    return (  
        <div className="inc-exp-container">
            <div>
                <h2>Income</h2>
                <p className="money plus">+${income}</p>
            </div>
            <div>
                <h2>Expense</h2>
                <p className="money minus">-${Math.abs(expense)}</p>
            </div>
        </div>
    );
}
 
export default IncomeExpense;