import React from 'react';
import logo from '../../assets/images/svg/Goodshow.svg';

export default function MessageSnippet(props) {
     // random color generator
     const randomColor = () =>{
        let color = [];
        for(let i=0;i<3;i++){
            color.push(Math.floor(Math.random()*200) + 50)
        }
        let outColor = color.join(',');
        return outColor;
    }

    const messageSnippet_style = {
        width:'100%',
        maxHeight: "80%",
        margin:"15px auto",
        // height:;

        display:"flex",
        alignItems:"center",
        justifyContent: props.dir === 'in' ? "flex-start" : "flex-end" /*set position of msg base on dir*/
    }
    const message_body_style = {
        minWidth: '15%',
        maxWidth: '70%',
        minHeight: '10%',
        maxHeight: '50%',

        display:"flex",
        alignItems:"flex-start",
        justifyContent:"flex-start"
    }
    const message_core_avatar = {
        width:'30px',
        margin:'5px'
    }
    let message_body_style_color = `rgb(${randomColor()})`;
    const message_core_style_in = {
        fontFamily: `'Courier New', Courier, monospace`,
        width:'85%',
        maxHeight:'250px',
        overflowY:'auto',
        overflowX: 'wrap',
        color:'',
        border: `2px solid ${message_body_style_color}`,        
        borderRadius:'10px',
        display:'flex',
        alignItems:'flex-start',
        justifyContent:'space-between',
        backgroundColor:'white',
        flexDirection:'column',
        padding:'10px'
    }

    const message_core_style_out = {
        fontFamily: `'Courier New', Courier, monospace`,
        width:'85%',
        maxHeight:'250px',
        overflowY:'auto',
        overflowX: 'wrap',
        color:'',
        border: '2px solid hotpink',        
        borderRadius:'10px',
        display:'flex',
        alignItems:'flex-end',
        justifyContent:'space-between',
        backgroundColor:'white',
        flexDirection:'column',
        padding:'10px'
    }
    return (
        <div className="message-snippet" style={messageSnippet_style}>
            <div className="message-body" style={message_body_style}>

                {props.dir === 'in' ? 
                <>
                    <img className="message-avatar"  src = {logo} style={message_core_avatar}/>
                    <div className="message-core" style={message_core_style_in}>
                    <i style={{
                            fontSize:'9px',
                            width:'100%',
                            textAlign:'left',
                            marginTop:'2px',
                            paddingBottom:'2px',
                            borderBottom:`1px solid ${message_body_style_color}`}}>
                            {props.composer}</i>
                        {/* Message it self  */}
                        <div style={{textAlign: 'left'}}>{props.children}</div>
                        {/* End of message */}
                        <i style={{
                            fontSize:'9px',
                            width:'100%',
                            textAlign:'right',
                            marginTop:'5px',
                            paddingTop:'5px',
                            borderTop:`1px solid ${message_body_style_color}`}}>{props.time}</i>
                    </div>
                </> : 
                <>
                <div className="message-core" style={message_core_style_out}>
                <div>{props.children}</div>
                        <i style={{
                            fontSize:'9px',
                            width:'100%',
                            textAlign:'right',
                            marginTop:'2px',
                            paddingTop:'2px',
                            borderTop:'1px solid hotpink'}}>{props.time}</i>
                </div>
                <img className="message-avatar"  src = {logo} style={message_core_avatar}/>
                </>
                }
            </div>
        </div>
    )
}

