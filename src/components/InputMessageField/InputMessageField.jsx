import React from 'react'
import ReactDom from 'react-dom'

let ref1 = React.createRef()
let InputMessageField=(props)=>{
  
 let addMessage=()=>{
   console.log('add')
   let dispatch=props.store.dispatch.bind(props.store)
   
   let channelID='0_2'
 let messageAction=props.store.messageActionCreator.bind(props.store)(ref1.current.value)
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
