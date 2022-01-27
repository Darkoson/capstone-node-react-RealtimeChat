const messageListReducer = (state = [], action) => {
    switch (action.type) {
        case 'addToList':
            return state = [...state,action.payload];                
        case 'clearList':
            return state = [];   
        default:
            return state; 
    }
}

export default messageListReducer;