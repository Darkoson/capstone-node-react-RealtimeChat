const socketReducer = (state = [],action) =>{
    switch (action.type) {
        case 'set':
            return state = action.payload;
        default:
           return state;
    }
}
export default socketReducer;