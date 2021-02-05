import React,{useContext} from 'react';
import {GlobalContext} from "../Context/GlobalState"
const Transaction = ({transaction}) => {
    const sign = transaction.amount<0? '-':'+'
    const context = useContext(GlobalContext)
    return ( 
        
        <li className={sign=='-'?"minus":"plus"}>
        {transaction.text} <span >{sign}${Math.abs(transaction.amount)}</span><button onClick={()=>context.deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
     );
}
 
export default Transaction;