import React from 'react'
import PropTypes from 'prop-types'
import {BrowserRouter, Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'



export default function Navbar(props) {
  return (
  //  function app(){
  //     const navigate = useNavigate()
  //     return(
        
  //       <button onClick={() => navigate(1)}>About</button>
  //     )
  //     }
    
    <nav className={`navbar navbar-expand-lg navbar-${props.Mode}`} 
    style= {{backgroundColor: props.Mode ==="dark"?"grey":"#55c7ed"}}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
     
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <BrowserRouter><ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
        </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" >{props.aboutText}</Link>
          </li>
          </ul></BrowserRouter>
        
          
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        <div className={`form-check form-switch text-${props.Mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
</div>

      </div>
    </div>
  </nav>
  
    
  )
}
Navbar.propTypes ={
    title:PropTypes.string.isRequired,
    aboutText:PropTypes.string.isRequired
}
Navbar.defaultProps ={
    title:'Set tiltle here',
    aboutText:'About'
}
