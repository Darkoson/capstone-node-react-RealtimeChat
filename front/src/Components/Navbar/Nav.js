import React,{useState} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Profile from '../Profile/Profile'
import App from '../App/App';
import PushOut from '../PushOut/PushOut';

export default function Nav() {
    const [currentUserData, setcurrentUserData] = useState({});
    function handleChangeUserData(data){
        setcurrentUserData(data);
    };
    const [authorized, setAuthorized] = useState(false);
    function handleChangeAuthorization (auth){
        setAuthorized(auth)
    };

    return (
        <BrowserRouter>
            <Switch>
                <Route path ="/" exact component={PushOut}/>
                <Route path ="/App" exact component={()=> <App changeUserData = {handleChangeUserData} changeAuth = {(auth)=>{setAuthorized(auth)}} /> }/>
                <Route path='/profile' exact component={()=> <Profile userData = {currentUserData} authorized = {authorized}/>}/>                
            </Switch>
        </BrowserRouter>
    )
}
