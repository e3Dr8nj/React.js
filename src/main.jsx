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
import state,{subscribe} from './redux/state.js'
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { addPost, changePost } from './redux/state.js'

//import {render} from './render.jsx'
//import * as serviceWorker from './serviceWorker';
//import state from './state'


let render = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} changePost={changePost} />
    </BrowserRouter>, document.getElementById('root')
  )
}

render()
subscribe(render)