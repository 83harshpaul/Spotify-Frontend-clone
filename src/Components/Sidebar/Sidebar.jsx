import React from 'react'
import './Sidebar.css'
import library from '../Assests/library.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEarthAsia } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

const Sidebar = ({setLanguageOptions,setShowCreatePlaylist,showCreatePlaylist}) => {
// const creatingPlaylist= React.useRef(null)

let currentLeft
const createPlaylistOptions= () =>{
    setShowCreatePlaylist("visible");
     currentLeft="530px" ;
}

if(showCreatePlaylist ==="hidden"){
     currentLeft="536px";
}

  return (
    <div className="sidebar">
        <div className="sidebar-yourlibrary">
            <div className="yourlibrary">
                <img src={library} alt="" />
                <span>Your Library </span>
            </div>
            <span className="sidebar-yourlibrary-plus">+</span>
        </div>

        <div className="createplaylist">
            <p className='createplaylist-heading'>Create your first playlist</p>
            <p className='createplaylist-sub'>It's easy,we'll help you</p>
            {/* <button className='createplaylist-button' >Create playlist</button> */}
            <button className='createplaylist-button' onClick={createPlaylistOptions}>Create playlist</button>
        </div>
        <div className="podcasts">
            <p className='podcasts-heading'>Let's find some podcasts to follow</p>
            <p className='podcasts-sub'>We'll keep you updated on new episodes</p>
            <Link to="/podcast"><button className='podcasts-button'>Browse podcasts</button></Link>
        </div>
        <div className="sidebar-footer">
            <ul>
                <li>Legal</li>
                <li>Safety & Privacy Center</li>
                <li>Privacy Policy</li>
                <li>Cookies</li>
                <li>About Ads</li>
                <li>Accessibility</li>
            </ul>
            <span className='sidebar-cookies'>Cookies</span>
        </div>
        <button className='sidebar-language' onClick={()=>{setLanguageOptions("block")}}>
        <FontAwesomeIcon icon={faEarthAsia} className='sidebar-globe'/>
        <span>English</span>
        </button>
        <div className="sidebar-createplaylist"  style={{visibility:showCreatePlaylist , left:`${currentLeft}`}}>
            <div className="sidebar-rotatedbox"></div>
            <span className="sidebar-createplaylist-line1">Create a playlist</span>
            <span className="sidebar-createplaylist-line2">Log in to create and share playlists.</span>
            <div className="sidebar-createplaylist-buttons">
                <button className="sidebar-createplaylist-btn1" onClick={()=>{setShowCreatePlaylist("hidden")}}>Not now</button>
                <Link to="/login"><button className="sidebar-createplaylist-btn2">Log in</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Sidebar