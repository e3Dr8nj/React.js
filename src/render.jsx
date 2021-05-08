import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import state from './redux/state.js'
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {addPost,changePost,addPostActionCreator, changePostActionCreator} from './redux/state.js'
//import * as serviceWorker from './serviceWorker';
//import state from './state'

export let render=()=>{
ReactDOM.render(
   <BrowserRouter>
  <App state = {state} addPost = {addPost} changePost={changePost}/>
   </BrowserRouter>, document.getElementById('root')
  )
}