import React from 'react'
import ReactDOM from 'react-dom'
import {NavLink} from 'react-router-dom'
import s from './Navbar.module.css'


let Navbar = (props) => {
 
  let NavbarElements = props.state.map(e=>{
    console.log(e)
    return(<div><NavLink to={e.path}>{e.name}</NavLink></div>)
  }
  )

let frends1 = Object.entries(props.members).map(([i,e])=>{
    return (
      <div>
      <div className='ava'><img  src={e.ava} />
      {e.username.slice(0,3)+'..'}
      </div>
      
      </div>
    )
  })
  

let Frends=(props)=>{
  return(
     <div className='frends'>
  {frends1}
  </div>
  )
}


return (
  <nav className={s.nav}>
  {NavbarElements}
  <div className='frends'>{frends1}</div>
  </nav>)
  
  
  
}

export default Navbar