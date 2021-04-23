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
import state from './redux/state.js'
import App from './App';
import {BrowserRouter} from 'react-router-dom'
//import * as serviceWorker from './serviceWorker';
//import state from './state'


ReactDOM.render(
   <BrowserRouter>
  <App state = {state}/>
   </BrowserRouter>, document.getElementById('root')
  );