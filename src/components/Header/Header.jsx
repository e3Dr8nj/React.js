import React from 'react'
import ReactDOM from 'react-dom'
import s from './Header.module.css'
let Header =(props)=>{
return (<div className = {s.header}>{props.state}</div>)
}
export default Header;

