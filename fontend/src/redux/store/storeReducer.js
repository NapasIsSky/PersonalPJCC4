const INTIAL_STATE ={
    data: [
        {itemCode:'w123', itemName:'cookwere pan 28cm hihi m-123', balance: '300 pcs.'},
        {itemCode:'w124', itemName:'cookwere pan 29cm hihi m-124', balance: '300 pcs.'},
        {itemCode:'w125', itemName:'cookwere pan 30cm hihi m-125', balance: '300 pcs.'}
        
    ]
}

const storeReducer = (state=INTIAL_STATE, action) => {
    switch(action.type){

        case "SET_DATA_STOCK":
            return {
                ...state,
                data: action.payload
            }

        default:
            return state
    }
}

export default storeReducer;