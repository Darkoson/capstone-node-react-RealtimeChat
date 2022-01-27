let intState = {gname:'linkers',gid:'12345'};
const chatReferenceReducer = (state = intState,action)=>{
    switch (action.type) {
        case 'setchat':
            return state = action.payload;    
        default:
            return state;
    }
}

module.exports = chatReferenceReducer;