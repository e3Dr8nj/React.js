import React from 'react'
import ReactDom from 'react-dom'
let Profile=(props)=>{
  let posts = props.posts.messages.map(e=>(<div>{e.content}</div>))
  let ref1 = React.createRef();
  //__
  let addMessageTest=()=>{
   let new_state= props.store_redux.dispatch({type:'ADD_MESSAGE_TEST',value:'new message text'})
   //let val = new_state.messages[0].value
   console.log(props.store_redux)
    // alert('test '+val)

  }
  //__
  const AddPostActionCreator=(msg)=>({type:'ADD_POST',message:msg})
  const ChangePostActionCreator=(text)=>({
    type:'CHANGE_POST',value:text
  })
  let addPost=()=>{
    
    let msg = {content:ref1.current.value}
    //props.addPost(msg)
    props.store._state.set.current_channel='0_0'
    props.dispatch({type:'ADD_MESSAGE',content:ref1.current.value})
    //props.dispatch(props.AddPostActionCreator(msg))
    
  }
  let changePost=()=>{
    
   // props.changePost(ref1.current.value)
  //  props.dispatch({type:'CHANGE_POST',value:ref1.current.value})
 // props.changePost(ref1)
 props.store._state.set.text=ref1.current.value
 props.store._render()

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
  <div><textarea ref={ref1} value={props.set.text} onChange={changePost}  ></textarea></div>
  <div><button onClick={addPost}>Add new post</button></div>
  <div><button onClick={addMessageTest}>Add new post</button></div>
  <div className='post_wripper'>{props.posts.messages[0].content}</div>
  <div className='post_wripper'>{props.posts.messages[1].content}</div>
{posts}
  </div>
  
  </div>)
}
export default Profile 