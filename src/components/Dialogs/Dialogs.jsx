import React from 'react'
import ReactDOM from 'react-dom'
import s from './Dialogs.module.css'
import Message from '../Message/Message.jsx'
import UserList from './UserList/UserList.jsx'
import {BrowserRouter,Route,NavLink} from 'react-router-dom'
import InputMessageField from '../InputMessageField/InputMessageField.jsx'
let MsgRoute=[]
let channel=''
 let Dialogs =(props)=>{ 
   let props1=props;
  
   let MessageElements =(channel)=> channel.messages.map(m=>{
   return(<Message key={m.id} state={m} set={props.set}/>)})//MessageElements
function renderDialogPage(logid){
  
  return(
  <div> 
  {MessageElements(props.channels[logid],props.set)}
  <div>{props.channels[logid].messages[1].content}</div>
  </div>
  )}
let UserList1 =(props)=>{
 
 let dialogsUserList = Object.entries(props.members).map(([i,e,props])=>{
   console.log(props)
    MsgRoute.push(<Route path={e.path} render={()=>{
     
      return renderDialogPage(e.logid) }}/>)
    
    return(<div key={i} className='list'>
    <img src={e.ava} />
    <NavLink to ={e.path}>{e.username}</NavLink>
    </div>)
    })

return (<nav className='list'>
   {dialogsUserList}
</nav>)

}



  

  return(
  <BrowserRouter>
  <div className={s.dialogs}>
  
 <UserList1  members={props.members}/>

  <div>
{MsgRoute}

  <InputMessageField addPost = {props.addPost} changePost={props.changePost} AddPostActionCreator={props.AddPostActionCreator} ChangePostActionCreator={props.ChangePostActionCreator} ch='0_1' store={props.store}/>
  </div>
  </div>
  </BrowserRouter>
  )}
export default Dialogs