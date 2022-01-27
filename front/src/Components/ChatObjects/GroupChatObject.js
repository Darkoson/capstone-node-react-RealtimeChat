import React from 'react'
import { useDispatch } from 'react-redux';
import chatReferenceAction from '../../actions/chatReferenceAction'

export default function GroupChatObject(props) {
    const dispatch = useDispatch();
    function setCurrentChat(e){
        dispatch(chatReferenceAction(
            { 
                gname:props.gname,
                gid:props.gid
            }
        ));
    }

    return (
        <div onDoubleClick ={setCurrentChat} className="group_chat_object top-center-content">
            <>
                {props.gname}
            </>
            <i>
                {props.gid}
            </i>
        </div>
    )
}
