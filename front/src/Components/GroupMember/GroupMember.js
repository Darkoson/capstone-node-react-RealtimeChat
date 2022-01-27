import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import { FaRegEye} from 'react-icons/fa';

function GroupMember(props) {
    // random color generator
    const randomColor = () =>{
        let color = [];
        for(let i=0;i<3;i++){
            color.push(Math.floor(Math.random()*200) + 50)
        }
        let outColor = color.join(',');
        return outColor;
    }

    //action to remove a user from the current group creation list 
    function handleUserRemove_From_List(e){
       console.log(e.target.parentElement.attributes.userid);
    }

    const style = {
        width:"95%",
        height:"30px",
        backgroundColor:`rgb(${randomColor()})`,
        color:"darkslategrey",
        margin:'5px',
        fontSize:"0.9em",
        borderRadius:"2px",
        display:"flex",
        justifyContent:"space-between",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }

    return (
        <li key={props.id} style ={style} userid={props.id}>                              
            <i> {<FaRegEye style ={{cursor:'pointer'}} />} {props.uname } </i>                               
            <FaTrashAlt style ={{cursor:'pointer'}} userid={props.id} onClick={props.handleDelFromList}/>                               
         </li>
    )
}

export default GroupMember
