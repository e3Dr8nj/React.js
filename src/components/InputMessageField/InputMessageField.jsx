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
 let addMessage=()=>{
   //console.log('add')
 //  props.store.dispatch({type:'ADD_MESSAGE',//channelID:'0_0',userID:'0'})
 }
 let onChange=()=>{
 props.store._state.set.text=ref1.current.value
 props.store._render()
 }
   return(
  <div className='bottom-fixed'>
  <span><textarea ref={ref1} width='70%' rows='1' 
  onChange={onChange} value={props.store._state.set.text} /></span>
  <span><button onClick={addMessage1}>Send</button></span>
  </div>
)}

export default InputMessageField
