import React from 'react'
import ReactDom from 'react-dom'
import s from './Message.module.css'
let Message =(props)=>{
  console.log(props)
  let d={}
   d.full =(props)=>{return (
    
    <div><span style={styleObj(props.state.member.color)}>{props.state.member.username}</span>:<span > {props.state.content}
    </span></div>
    
    )}
   d.compact=(props)=>{return (<div><span style={styleObj(props.state.member.color)}>{props.state.member.username}</span>:<span > {props.state.content}
    </span></div>)}
   d.messenger =(props)=>{
     let styleMessage=(props.state.member.id==props.set.userid)?s.messenger_you:s.messenger_frend
     return (
    
    <div className={styleMessage}><span style={styleObj(props.state.member.color)}>{props.state.member.username}</span>:<span > {props.state.content}
    </span></div>
    
    )}
  let Choiser=(props)=>{

   
    return  (d.[props.set.disign](props))
    }
 if(!props.state.member.color) {props.state.memeber.color='#000000'}
 
  let styleObj=(color1)=>{
    
   return { 
    color:color1
     
     }
  }
  
  let styleMessengerObj=(color1)=>{
    
   return { 
    color:color1
     
     }
  }
  
  return(
    <div >
   <span> <Choiser state={props.state} set={props.set} />
    </span>  
    </div>
    
   
    )
}
export default Message