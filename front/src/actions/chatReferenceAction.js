const chatReferenceAction = (data) =>{
    return {
        type: 'setchat',
        payload: data
    }
}

module.exports = chatReferenceAction;