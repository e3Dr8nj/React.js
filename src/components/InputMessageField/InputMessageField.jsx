import React from 'react'
import ReactDom from 'react-dom'

let ref1 = React.createRef()
let InputMessageField=(props)=>{
  
  let addMessage=()=>{
    console.log(props)
 // alert(props.ch)
  props.store._state.set.text=ref1.current.value
  props.store._render()
  alert(props.store._state.set.text)
  ref1.current.value=''
  props.store._state.set.text=''
 }
 let onChange=()=>{

 }
   return(
  <div className='bottom-fixed'>
  <span><textarea ref={ref1} width='70%' rows='1' 
  onChange={()=>{}}/></span>
  <span><button onClick={addMessage}>Send</button></span>
  </div>
)}

export default InputMessageField
