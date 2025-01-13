import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import spotifyicon from '../Assests/spotify-icon.png'
const Navbar = ({setCurrentPage,setNavbarInputBorder,navbarInputBorder}) => {
 

  const inputNavbarStyles = {
    border:"2px solid #fff",
    backgroundColor:"#323131",
    cursor:"text"
  }
  const inputStyles = ()=>{
      setNavbarInputBorder(inputNavbarStyles)
  } 
  return (
    <div className='navbar'>
       <Link to="/"><img src={spotifyicon} alt="" className='navbar-spotifylogo'/></Link>
       <div className='navbar-searchbar'>
          <FontAwesomeIcon icon={faHouse} className='navbar-homeicon'/>
          <div className="navbar-input" style={{border:navbarInputBorder.border, backgroundColor:navbarInputBorder.backgroundColor}}>
          <Link to="/browseall"><FontAwesomeIcon icon={faMagnifyingGlass} className='navbar-search-icon' onClick={inputStyles} style={{ backgroundColor:navbarInputBorder.backgroundColor}}/></Link>
          
          <Link to="/browseall" className='navbar-search-link'> <input type='search' placeholder='What do you want to play?' className='navbar-search' onClick={inputStyles} style={{ backgroundColor:navbarInputBorder.backgroundColor, cursor:navbarInputBorder.cursor}}/></Link>
            {/* <FontAwesomeIcon icon={faBriefcase} className='navbar-case'/> */}
            <Link to="/browseall" className='navbar-browse'><FontAwesomeIcon icon={faBriefcase} className='navbar-case' style={{ backgroundColor:navbarInputBorder.backgroundColor}}/></Link>
          </div>
       </div>
       <div className='navbar-account'>
          <Link to="/signup" className='navbar-signup'><div className='navbar-signup'>Sign up</div></Link>
          <Link to="/login" className='navbar-login-button'><div className='navbar-login'>Log in</div></Link>
          {/* <div className='navbar-signup' onClick={()=>setCurrentPage("signup")}>Sign up</div>
          <div className='navbar-login'>Log in</div> */}
       </div>
    </div>
  )
}

export default Navbar








