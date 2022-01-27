import React from 'react';
import logo from './logo.svg';
import { Draggable } from 'react-drag-and-drop';
import { Tween } from 'react-gsap';
import { FaLink } from 'react-icons/fa';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import chatReferenceAction from '../../actions/chatReferenceAction'

export default function User_Card(props) {
    const dispatch = useDispatch();
    const randomColor = () =>{
        let color = [];
        for(let i=0;i<3;i++){
            color.push(Math.floor(Math.random()*230) + 55)
        }
        let outColor = color.join(',');
        return outColor;
    }

    const initiateChat = ()=>{
        Axios.post('http://localhost:5000/singlechat/create',{
            init_id : props.myid,
            coop_id : props.foundata.id
        }).then(res =>{
            //the res on contains our chat id, we will use that to join a group
            let chatid = '';
            let coop_id = '';
            console.log("data => ", res.data[0]);
            if(res.data[0]){
                // alert(res.data[0])
                  chatid = res.data[0].chatid;
                  coop_id = res.data[0].coop_id;
                  console.log(' - >', coop_id)
                  // if single chat is created get coop
                  // data.fname + lname then. importantly
                  //the the unique chatid created, it wil be used as
                  //reference to setup a chat
                    Axios.post('http://localhost:5000/users/id',{
                        id: `${coop_id}`
                    }).then(res=>{
                        console.log('data => ',res.data[0]);
                        let coop_name = `${res.data[0].fname}` 
                        dispatch(chatReferenceAction(
                           {
                            gname: coop_name,
                            gid: chatid
                           }
                        ))
                    })
            }else if(res.data.code === 23505){
                //this is the case if chat already exist
                //we will query the chatid.
                    console.log(res.data.code);
                /**/
                

            }
        }).catch(err=>{
            console.log(err);
        });
    }

    return (
        <Draggable 
            type = "user_card" 
            data={JSON.stringify(props.foundata)}>
            <div className="user-card" style={{background: `linear-gradient(to right, rgb(${randomColor()}), darkslategray)`}}>
                <Tween to={{ rotation: 360,opacity:1 }} duration={1} repeat={-1} delay={1}>
                    <img src={logo} style={{
                        width:"15%"
                    }}/>
                </Tween>
                <p style={{fontSize:"0.9em"}}>{props.foundata.fname}  {props.foundata.lname}</p>
                <i onClick={initiateChat} style={{fontSize:"2em"}}> <FaLink/> </i>
            </div>
        </Draggable>
    )
}
