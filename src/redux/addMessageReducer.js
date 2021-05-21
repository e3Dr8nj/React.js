
const ADD_MESSAGE = 'ADD_MESSAGE'
const TEXT_VALUE_CHANGED='TEXT VALUE CHANGED'
export let onMessageAddActionCreator=(value)=>({
  type:ADD_MESSAGE,content:value
})
export let onTextValueChanged=(value)=>({
  type:TEXT_VALUE_CHANGED,value:value
})
let addMessageReducer=(store,state,action)=>{
 // alert(action.type)
  switch (action.type){
   case ADD_MESSAGE:
    
      let channel_id=store._state.set.current_channel
     
      let member_id = store._state.set.userid
      let member = store._state.members[member_id]
      let channel = state[channel_id]
      let channel_len = channel.messages.length
      let next = channel_len+1
      let message = {id:next,content:action.content,member:member}
      state[channel_id].messages.push(message)
      store._state.set.text=''

    
  return state
  case TEXT_VALUE_CHANGED:
  store._state.set.text=action.value
  return state
  }//\switch
  
}
export default addMessageReducer