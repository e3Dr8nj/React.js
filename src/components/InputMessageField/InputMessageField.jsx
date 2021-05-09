import React from 'react'
import ReactDom from 'react-dom'

let ref1 = React.createRef()
let InputMessageField=(props)=>{
  
  let addMessage=(props)=>{
  alert('msg')
  }
   return(
  <div className='bottom-fixed'>
  <span><textarea ref={ref1} width='70%' rows='1'/></span>
  <span><button onClick={addMessage}>Send</button></span>
  </div>
)}

export default InputMessageField
