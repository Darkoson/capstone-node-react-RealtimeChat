import React,{useState} from 'react'
import User_Card from '../User_Card';
import {FaSearch} from 'react-icons/fa';
import Axios from 'axios'
import { useSelector } from "react-redux";

export default function ProfileBodyRight(props) {
    const [usersList, setUsersList] = useState([]);
    const profileData = useSelector(state => state.profileData)
    function handleOnSearchUser(e){
        Axios.get(`http://localhost:5000/users/search/${e.target.value }`).then((res)=>{
           if(res.data){
                // let data = res.data.filter(e=>e.id != props.userData.id)
                setUsersList(res.data.filter(e=>e.id !== props.userData.id));
            }
            console.log('now list =>',usersList)
        }).catch((reason)=>{
            console.log(reason)
        })
    }

    return (
        <div className="ProfileBody-Body-right top-center-content">
              
                <div className="ProfileBody-Srch-Users ">
                    <FaSearch/>
                    <input type = "text" placeholder="Search user here" onChange={handleOnSearchUser}/>
                </div>
                <div className="user-card-list">
                    {
                        usersList.map((foundata)=>{
                            return <User_Card key = {foundata.id} myid={profileData.id} foundata = {foundata}/> 
                        })
                    }
                    {/* <User_Card/>   */}
                </div>
        </div>
    )
}
