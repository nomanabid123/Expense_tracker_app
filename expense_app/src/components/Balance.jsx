import React,{useContext} from 'react'

import {GlobalContext} from "../Context/GlobalState"
export const Balance = () => {
    const context = useContext(GlobalContext)
    let amount= context.transactions.map(transaction=>transaction.amount)
    let total = amount.reduce((sum,item)=>sum+=item,0).toFixed(2)
    return (
        <div>
            <h4>Your Balance</h4>
            <h1 className="balance">${total}</h1>
        </div>
    )
}
