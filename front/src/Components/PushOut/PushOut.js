import React, {useState,useEffect} from 'react'
import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import { Link } from 'react-router-dom';
import { Tween } from 'react-gsap';
import Goodshow from '../../assets/images/svg/Goodshow.svg'
import {useHistory} from 'react-router-dom';


export default function PushOut(props){
    let history = useHistory();
    gsap.registerPlugin(TextPlugin);
    // let logo = useRef(null)
   const [start,setStart] = useState(false);
   useEffect(() => {
       setTimeout(()=>{
            setStart(true)
            history.push('/App')
       },8000)
   }, [])
    const randomColor = () =>{
        let color = [];
        for(let i=0;i<3;i++){
            color.push(Math.floor(Math.random()*200) + 50)
        }
        let outColor = color.join(',');
        return outColor;
    }
    return(
        <div className="start-container">
            <Link to={start ? "/App" : "/"}>
               <Tween to={{ rotation: -360,opacity:1 }} duration={10} ease="elastic.out(2, 0.5)" delay='1'>
                  <img  style = {{width:150,height:150,opacity:0,marginBottom:5}} src={Goodshow} />
               </Tween>
            </Link>
                <Tween to={{ text: 'Linkers' }} duration={2} >
                    <span className="starter-title" style={{
                        fontSize:'2em', fontWeight:"lighter",
                        color: `rgb(${randomColor()})` }}>
                        <Link to="/App">AppChatRadio</Link>
                    </span>
                </Tween>  
        </div>
    )
}

