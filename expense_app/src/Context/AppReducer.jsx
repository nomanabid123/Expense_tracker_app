export default (state,action)=>{
    console.log(action)
    switch(action.type){
        case "DELETE_TRANSACTION":
            return {
                ...state,
                transactions:state.transactions.filter(transaction=>transaction.id!=action.payload)
            }
        case "Add_TRANSACTION":
           return {...state,
            transactions: [...state.transactions,action.payload]
            
           }
        default:
            return state;
    }
}