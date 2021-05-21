let DELETE_MESSAGE_ACTION_CREATOR = 'DELETE_MESSAGE_ACTION_CREATOR'
export let onDeleteMessageActionCreator =(id)=>({
  type:DELETE_MESSAGE_ACTION_CREATOR,
  messageid=id
})
let deleteMessageReducer=(store,state,action)=>{


}
export default deleteMessageReducer