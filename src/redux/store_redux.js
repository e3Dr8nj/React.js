import {createStore,combineReducers} from 'redux'
import addMessageReducer from './addMessageReducer.js'

let reducers = combineReducers({
  addMessageReducer:addMessageReducer
})
let store_redux = createStore(reducers)
export default  store_redux
//