export const appendMessage = (data) =>{
    return {
        type:'append',
        payload: data
    }
}

export const clearMessage = () =>{
    return {
        type:'clear'
    }
}