import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Link,NavLink} from 'react-router-dom'
import s from './App.css'
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Dialogs from './components/Dialogs/Dialogs.jsx'
import Chat from './components/Chat/Chat.jsx'
import Profile from './components/Profile/Profile.jsx'

let App =(props)=>{
  console.log('d');
  return(
   
    
    <div className = 'app-wripper'>
    
    <Header state={props.state.header}/>
    <Navbar state={props.state.navbar} members={props.state.members}/>
    
   
    <div className = 'content-wripper'>
     <div><NavLink to ='/dialogs'>load content</NavLink></div>
    
     <Route path='/chat' render={()=>{return(<Chat state={props.state.chat} set={props.state.set} ></Chat>)} }/>
     <Route path='/dialogs' render={()=>{return(<Dialogs state={props.state.dialogs} members={props.state.members}  channels={props.state.channels} set={props.state.set} ></Dialogs>)}} />
      <Route path='/profile' render={()=>{return(<Profile user={props.state.members['0']} posts={props.state.channels['0_0']} set={props.set}></Profile>)}} />
    </div>
    </div>
   
    )
}
export default App;