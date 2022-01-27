import React from 'react'

export default function Navbar(props) {
    
    const randomColor = (scheme,lightness) =>{
        let color = [];
        for(let i=0;i<3;i++){
            color.push(Math.floor(Math.random()*scheme) + lightness)
        }
        let outColor = color.join(',');
        console.log(outColor)
        return outColor;
    }

    const handleChangeAct = (e)=>{
        props.changeAct(props.act === 'Login' ?  'Signup'  : 'Login' );
    }
    return (
        <nav className="center-content">
            <div className="nav-child-1 left-center-content-row">
            <h3 style={{color:`rgb(${randomColor(0,70)})`}}>Linkers</h3> 
            </div>  
            <div className="nav-child-2 center-content" onClick = {handleChangeAct}>                        
               {  props.act === 'Login' ?   <i> Signup </i> : <i> Login </i>}
            </div>          
        </nav>
    )
}
 