import React from 'react'
import ReactDom from 'react-dom'
let Profile=(props)=>{
  let posts = props.posts.messages.map(e=>(<div>{e.content}</div>))
  let ref1 = React.createRef();
  let onClickFunction=()=>{
    let msg = {content:ref1.current.value}
    props.addPost(msg)
    alert(ref1.current.value)
  }
console.log(props.posts.messages[0])
  let ProfileInfo=(props)=>{
   
       
   console.log(props.posts)
    return(
    <div className='profile'>
    
    
    <div ><img src={props.user.ava}/></div>
    <div className='profile_info'>
    <div>{props.user.username}</div>
    <div>status</div>
    <div>about you</div>
    </div>
    </div>
    )}
  return (<div>
  <ProfileInfo user={props.user}/>
 
  <div className='posts_wripper'>
  
  <div>My Posts</div>
  <div><textarea ref={ref1}></textarea></div>
  <div><button onClick={onClickFunction}>Add new post</button></div>
  <div className='post_wripper'>{props.posts.messages[0].content}</div>
  <div className='post_wripper'>{props.posts.messages[1].content}</div>
{posts}
  </div>
  
  </div>)
}
export default Profile 