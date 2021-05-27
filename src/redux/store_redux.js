import {createStore,combineReducers} from 'redux'
//import addMessageReducer from './addMessageReducer.js'
let initialState = {
  messages:[{content:'2'}]
}
let addMessageReducer = (state=initialState,action)=>{
  if (action.type="ADD_MESSAGE_TEST") {
    state.messages[0].content=action.value
    return state
  }
  return state
}
let reducers = combineReducers({
  addMessageReducer:addMessageReducer
})
let store_redux = createStore(reducers)
export default  store_redux
//