const ADD_MESSAGE = 'ADD_MESSAGE'
const TEXT_VALUE_CHANGED='TEXT VALUE CHANGED'
let addMessageReducer =(store,state,action)=>{
 // alert(action.type)
  if(action.type===ADD_MESSAGE) {
    //change state
      //define channelid
      let channel_id=store._state.set.current_channel
      //define member
      let member_id = store._state.set.userid
      let member = store._state.members[member_id]
      let channel = state[channel_id]
      let channel_len = channel.messages.length
      let next = channel_len+1
      let message = {id:next,content:action.message.content,member:member}
      state[channel_id].messages.push(message)
      //alert(channel_len)

    //null value
  return state
  }
}
export default addMessageReducer