import onlinerLogo from '../../assets/images/svg/onlinerLogo.svg'
import {FaUser} from 'react-icons/fa'
import {GiPadlock} from 'react-icons/gi'
import {Controls} from './Controls'
// import { Link } from 'react-router-dom';
// import {  Tween } from 'react-gsap';

function Login(){
  const randomColor = () =>{
    let color = [];
    for(let i=0;i<3;i++){
        color.push(Math.floor(Math.random()*200) + 50)
    }
    let outColor = color.join(',');
    console.log(outColor)
    return outColor;
}
  return(
    <div style = {{width:'100%',height:'100%'}}>
      <div className="nav">
          <div style = {{width:'100%',height:'100%',opacity:1,display:"flex",alignItems:'center'}}>
            <img src={onlinerLogo} style={{width:'10%', margin:0}}/> 
             <i style={{color:`rgb(${randomColor()})`}}>Linkers</i>
          </div>
      </div>
      <div className="body">
      <div className="body-shell start-container" style={{
            width:'35%',
            height:'75%',
            backgroundColor:'aliceblue'}}>
              <div style={{
            width:'100%',borderBottom:'2px solid lightblue'}} >
                <h3>Login</h3>
              </div>
              <hr/>              
              <form method='POST' action="localhost:5000/users/login">
                <br/>
                 <div style={{width:'80%',textAlign:'left',fontSize:'0.9em'}}> <label>Email</label></div>
                 <div className="form-element center">
                  {/* <label for="username" >Username</label> */}
                  <div className="center" style={{width:'10%',height:'100%'}}>
                    <FaUser/>
                  </div>                  
                  <input type ="text" name="username" id="username"/>
                 </div>     
                 <br/>
                 <div style={{width:'80%',textAlign:'left',fontSize:'0.9em'}}> <label>Password</label></div>
                 <div className="form-element center">
                   <div className="center" style={{width:'10%',height:'100%'}}>
                     <GiPadlock/>
                   </div>
                  <input type="password" name="password" id="password"/>
                 </div>     
                 <br/>
                 <br/>
                  {/* <Controls/>  */}
                  <input type="submit" />
              </form>

          </div>
      </div>
      <div className="footer">
         Continue With Google
      </div>
    </div>
   
)
}

export default Login;
