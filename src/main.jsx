/*
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
const x=(props)=>{<div>d</div>}
ReactDOM.render(
  <React.StrictMode>
  <x />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import state from './redux/state.js'
import App from './App';
import state,{store,addPost,changePost,subscribe} from './redux/state.js'
import {BrowserRouter} from 'react-router-dom'
//import {addPost} from './redux/state.js'
//import {render} from './render.jsx'
//import * as serviceWorker from './serviceWorker';
//import state from './state'
let render=()=>{
  debugger
ReactDOM.render(
  
   <BrowserRouter>
  <App state = {store.getState.bind(store)(store)} dispatch={store.dispatch.bind(store)} addPost = {store.addPost.bind(store)} changePost={store.changePost.bind(store)}    store={store}  />
   </BrowserRouter>, document.getElementById('root')
  )
}
store.subscribe(render)

try{
render()
}catch(e){console.log(e)}