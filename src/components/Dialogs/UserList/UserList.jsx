import React from 'react'
import ReactDom from 'react-dom'
import {Route,NavLink} from 'react-router-dom'
let MsgRoute=[]
let UserList =(props)=>{
 
 let dialogsUserList = Object.entries(props.members).map(([i,e])=>{
    MsgRoute.push(<Route path={e.path} render={()=>{return(<div>smth</div>)}}/>)
    return(<div key={i} className='list'>
    <img src={e.ava} />
    <NavLink to ={e.path}>{e.username}</NavLink>
    </div>)
    })

return (<nav className='list'>
   {dialogsUserList}
</nav>)
}

export default UserList
