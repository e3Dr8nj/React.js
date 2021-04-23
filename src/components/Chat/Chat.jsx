import React from 'react'
import ReactDom from 'react-dom'
import MessageElement from '../Message/Message.jsx'

let Chat =(props)=>{
  //___ElGn
  let Elems = props.state.messages.map(e=>{return(<MessageElement state={e} set={props.set} />)})
  //___onClick
   let ref1 = React.createRef()
   
let addMessage=(props)=>{
 
  alert(ref1.current.value);
  refOutput.value='D'

}
  //--/onClick


  return(<div className='chat'>
  <div>
  {Elems}
  <div  ></div>
  </div>

  <div className='bottom-fixed'>
  <span><textarea ref={ref1} width='70%' rows='1'/></span>
  <span><button onClick={addMessage}>Send</button></span>
  </div>
    </div>
    )
}
export default Chat