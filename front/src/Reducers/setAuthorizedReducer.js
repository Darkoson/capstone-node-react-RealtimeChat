export const setAuthorizedReducer = (state=false,action) =>{
    switch (action.type) {
        case 'setAuth':
            return state = action.payload    
        default:
            return state;
    }
}