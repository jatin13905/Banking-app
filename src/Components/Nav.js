import React from 'react'
import "../CSS/nav.css"
import {BsBank2,BsTwitter,BsYoutube,BsInstagram,BsPersonFill} from "react-icons/bs"
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>

<nav className='nav-main'>
  <div id="nav-logo-section" className="nav-section">

    <Link to="/" className='link'>
    <i> <BsBank2/> </i>
    SBFC Bank
    </Link>


  </div>
  <div id="nav-link-section" className="nav-section">
    <Link to="/profile" className='link'>
    <i className='profile-icon'>
    <BsPersonFill/>
    </i>
    </Link>
    {/* <a href="#">WORK</a> */}
  </div>
  <div id="nav-social-section" className="nav-section">
    <Link to='/' className='link'>
      <i><BsTwitter/></i>
    </Link>
    <Link to='/' className='link'>
      <i><BsYoutube/></i>
    </Link>   
    <Link to='/' className='link'>
      <i><BsInstagram/></i>
    </Link>    
  </div>

</nav>


    </>
  )
}

export default Nav