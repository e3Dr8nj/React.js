import React from 'react'
import ReactDom from 'react-dom'

let ref1 = React.createRef()
let InputMessageField=(props)=>{
  


  let addMessage1=()=>{
    console.log(props)
 // alert(props.ch)
  props.store._state.set.text=ref1.current.value
 // props.store._render()
  alert(props.store._state.set.text)
  let channel = props.store._state.channels['0_0']
  let member = props.store._state.members['0']
  channel.messages.push({
    content:props.store._state.set.text
    ,id:channel.messages.length+1
    ,member:member
   // ,member:
  })
  ref1.current.value=''
  props.store._state.set.text=''
  props.store._render()
 }//\addMessage
 let messageActionCreator=(channelID,userID,content)=>{ 
  return {type:'ADD_POST',channelID:channelID,userID:userID,message:{content:content}}
 }
 let addMessage=()=>{
   console.log('add')
   let dispatch=props.store.dispatch.bind(props.store)
   let userID='0'
   let channelID='0_2'
 let messageAction=props.store.messageActionCreator.bind(props.store)(channelID,ref1.current.value)
  dispatch(messageAction)
 }
 let onChange=()=>{
 props.store._state.set.text=ref1.current.value
 props.store._render()
 }
   return(
  <div className='bottom-fixed'>
  <span><textarea ref={ref1} width='70%' rows='1' 
  onChange={onChange} value={props.store._state.set.text} /></span>
  <span><button onClick={addMessage}>Send</button></span>
  </div>
)}

export default InputMessageField
