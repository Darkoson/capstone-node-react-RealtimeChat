import React , {useState} from 'react';
import {FaUser, FaUserAlt} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';
import {GiPadlock} from 'react-icons/gi';
import {  Tween } from 'react-gsap';
import Axios from 'axios'
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setAuthorizedAction} from '../../actions/setAuthorized'
import {setProfileDataAction} from '../../actions/setProfileDataAction'
//  
function Signs(props) {       
    return (
        <div className="main-sign">      
          <h2 style={{textAlign:'center'}}>{props.act}</h2>     
            <div className="sign-content center-content">
            {props.act === 'Login' ?
            (     <In changeUserData = {props.changeUserData} changeAuth = {props.changeAuth} changeLocation= {props.changeLocation} />
                          
             ) : (<Up changeUserData = {props.changeUserData} changeAuth = {props.changeAuth} />)}
            </div>
        </div>
    )
}

function In(props){ 
    const dispatch = useDispatch();
    const [userName, setuserName] = useState('')
    const [passWord, setPassword] = useState('')    
    let history = useHistory();


    const handleSubmit = (event)=>{
        event.preventDefault();
        Axios.post('http://localhost:5000/users/login',{
            username:userName,
            password:passWord
        }).then(res=>{
            if(res.data[0]){
                dispatch(setAuthorizedAction(true))
                dispatch(setProfileDataAction(res.data[0]))
                history.push('/profile');//redirect to profile page
                
            }else{
                dispatch(setAuthorizedAction(false))
            }
            
        })
    }
    
    return(
        <Tween to={{opacity: '1'}} duration={2} ease="power1.in(1, 0.5)">                
        <div style ={{opacity: '0'}} className="in-body center-content">           
            <form onSubmit={handleSubmit} className="top-center-content">
                <br/>
                <br/>
                <br/>
                <div className="form-element center-content">
                    <div>
                        <FaUser/>
                    </div>
                    <div>
                        <input value={userName} type="text" onChange={(e)=>{
                            setuserName(e.target.value);
                        }} placeholder='email...'/>
                    </div>
                    <div>
                        show
                    </div>
                </div>
                <br/>
                <div className="form-element center-content">
                    <div>
                        <GiPadlock/>
                    </div>
                    <div >
                        <input value={passWord} type="password" onChange={(e)=>{
                            setPassword(e.target.value);
                        }} placeholder='password...'/>
                    </div>
                    <div>
                        show
                    </div>
                </div>
                <br/>
                <input className="form-send-btn" style = {{borderRadius:'30px'}} type='submit' />
            </form>
        </div>
        </Tween>
    )
}

function Up(props){
    const history = useHistory();
    const [fName, setFname] = useState('');
    const [lName, setLname] = useState('');
    const [eMail, setEmail] = useState('');
    const [pWord, setPword] = useState('');

    const handleSubmit = (event)=>{
        event.preventDefault();
        Axios.post('http://localhost:5000/users/register',{
            fname : fName,
            lname : lName,
            email : eMail,
            password: pWord
        }).then(res=>{
            props.changeAuth(true);
            props.changeUserData(res.data[0]);
            history.push('/profile');//redirect to profile page
        }).catch(reson=>{
            console.log(reson)
        });
        setFname('')
        setLname('')
        setEmail('')
        setPword('')
    }
    
    return(
        <Tween to={{opacity: '1', rotation:'0'}} duration={2} ease="power1.in(1, 0.5)">
            <div style ={{opacity: '0', translateX:'5'}} className="out-body">  
            <form onSubmit={handleSubmit} className="top-center-content">
                <br/>
                <div className="form-element center-content">
                    <div>
                        <FaUser/>
                    </div>
                    <div>
                        <input  value={fName} type="text" placeholder='firstname...' 
                        onChange={(e)=>{
                            setFname(e.target.value);
                        }}/>
                    </div>
                    <div>
                        show
                    </div>
                </div>
                <div className="form-element center-content">
                    <div>
                        <FaUserAlt/>
                    </div>
                    <div>
                        <input value={lName} type="text"  placeholder='lastname...' 
                        onChange={(e)=>{
                            setLname(e.target.value);
                        }}/>
                    </div>
                    <div>
                        show
                    </div>
                </div>
                <div className="form-element center-content">
                    <div>
                        <FaEnvelope/>
                    </div>
                    <div >
                        <input value={eMail} type="text" placeholder='email...' 
                        onChange={(e)=>{
                            setEmail(e.target.value);
                        }}/>
                    </div>
                    <div>
                        show
                    </div>
                </div>
                <div className="form-element center-content">
                    <div>
                        <GiPadlock/>
                    </div>
                    <div >
                        <input value={pWord} type="password" placeholder='password...' 
                        onChange={(e)=>{
                            setPword(e.target.value);
                        }}/>
                    </div>
                    <div>
                        show
                    </div>
                </div>
                <br/>
                <input className="form-send-btn" style = {{borderRadius:'30px'}} type='submit' />
            </form>
            </div>
        </Tween>
    )
}


export default Signs;