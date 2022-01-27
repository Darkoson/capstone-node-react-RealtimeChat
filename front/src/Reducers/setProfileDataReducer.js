export const setProfileDataReducer = (state = {}, action) =>{
    switch (action.type) {
        case 'setProfileData':
           return state = action.payload    
        default:
            return state;
    }
}