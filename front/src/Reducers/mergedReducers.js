//import combine Reducer from redux
import {combineReducers} from 'redux';

import messengerReducer from './messengerReducer';
import messageListReducer from './messageListReducer';
import socketReducer from './socketReducer';
import chatReferenceReducer from './chatReferenceReducer';
import {setAuthorizedReducer} from './setAuthorizedReducer';
import {setProfileDataReducer} from './setProfileDataReducer'

const allReducers = combineReducers({
    messenger: messengerReducer,
    messageList: messageListReducer,
    socketer: socketReducer,
    chatRef : chatReferenceReducer,
    authorized: setAuthorizedReducer,
    profileData: setProfileDataReducer
});

export default allReducers;