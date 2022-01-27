import React,{useState,useEffect} from 'react'
import {FaSearch,FaFeatherAlt,FaPlusCircle} from 'react-icons/fa';
import User_Card from '../User_Card';
import MessageSnippet from '../../MessageSnippet/MessageSnippet'
import { Droppable } from 'react-drag-and-drop'
import GroupMember from '../../GroupMember/GroupMember';

export default function ProfileBody(props) {
    
    const [srchUserInput, setSrchUserInput] = useState('');
    useEffect(() => {
             
    },[srchUserInput])

    //handle user input change
    function handle_users_onChange (e) {
        setSrchUserInput(e.target.value);      
    }

    //set style for the droppable div
    const createGroup_Form = {
        marginTop:"3px",
        width:"230px",
        height: "200px",
        maxHeight:"350px",
        border:"2px dashed hotpink",
        borderRadius:"10px",
        overflowY:"auto",
        margin:'0',
        listStyle:'none'
    }

    //a state for current running group creation
    const [creatnGroupList, setCreatnGroupList] = useState([])

    //action to perform when user drops a userCard
    function onUserCard_Drop(data){
        data = JSON.parse(data.user_card);//parse data to 
        setCreatnGroupList((prev)=>{
            for(let item of [...prev]) {
                console.log(item, 'data -> ', data)
            }          
            return [...prev,data]
        });
    }

    function GroupRenderer(){        
        return creatnGroupList.map((item,index) =>{
            return <GroupMember key = {index}  id = {item.id} uname = {item.uname}/>
        })
    }

    //send a single message
    function sendMessage(e){
        console.log(e.target);
    }

    return (
        <div className="ProfileBody-Body center-content">
            <div className="ProfileBody-Body-left top-center-content">
                <span>My Friends</span>
                <div className="ProfileBody-Srch-Users ">
                    <FaSearch/>
                    <input type = "text" value={srchUserInput} placeholder="Search user here" onChange={handle_users_onChange}/>
                </div>         
                <button style={{
                        margin:'5px',
                        background:'none',
                        width:"50%",
                        height:"7%"
                    }}> {<FaPlusCircle/>} Group </button>

                <Droppable types={['user_card']} onDrop = {onUserCard_Drop} >
                    <div style = {createGroup_Form}>
                      {GroupRenderer()}
                    </div>
                 </Droppable>
                
            </div>
            <div className="ProfileBody-Body-center top-center-content">
                <span>Chat</span>
                <div className="chat-body">
                    {
                         props.messageList.map((message) => {
                            return <MessageSnippet time={message.time} dir={message.dir} composer={message.composer}>
                                {message.msg}
                            </MessageSnippet>                         
                        })
                    }
                    

                </div>                
                <div className="chat-composition">
                    <div className="textMsg-box">
                        <textarea value={props.outMsg} onChange={props.handleComposer} placeholder="Composer message here ...." style={{
                            background:'none',
                            width:"99%",
                            height:"90%",
                            maxWidth:"99%",
                            maxHeight:'95%',
                            minWidth:"99%",
                            minHeight:'90%',
                            textAlign:'revert',
                            outline:'none',
                            padding:'5px',
                            fontSize:'1.2em',
                            backgroundColor:'darkslategray',
                            boxShadow: `1px 1px 4px khaki`,
                            color:"khaki"
                            }}>

                        </textarea>
                    </div>
                    <div className="textMsg-control-box" onClick={props.handleSubmitMessage}>
                        <FaFeatherAlt/>    
                    </div>
                </div>
            </div>
            <div className="ProfileBody-Body-right top-center-content">
                <h4 style={{margin:'0%',textAlign:"left"}}>Search User</h4>
                <div className="ProfileBody-Srch-Users ">
                    <FaSearch/>
                    <input type = "text" placeholder="Search user here"/>
                </div>
                <div className="user-card-list">
                    <User_Card/>                    
                </div>
            </div>
        </div>
    )
}
