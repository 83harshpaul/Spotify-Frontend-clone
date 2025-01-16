import React from 'react'
import Navbar from '../Navbar/Navbar'
import Main from '../Main/Main'
import Player from '../Player/Player'
import Login from '../Pages/Login'
import MainPlusNavbar from './MainPlusNavbar'
import { Outlet } from 'react-router-dom'
// import BrowseAll from './Components/Pages/BrowseAll';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import SignUp from './Components/Pages/SignUp';

const Spotify = ({setLanguageOptions,showCreatePlaylist,setShowCreatePlaylist,
                 setNavbarInputBorder,navbarInputBorder,setScrollPixels,playerData}) => {
  return (
    <div>
        <MainPlusNavbar setLanguageOptions={setLanguageOptions}
                         showCreatePlaylist={showCreatePlaylist}
                         setShowCreatePlaylist={setShowCreatePlaylist}
                         setNavbarInputBorder={setNavbarInputBorder}
                         navbarInputBorder={navbarInputBorder}
                         setScrollPixels={setScrollPixels}
                         />
        <Player playerData={playerData}/>
    </div>
  )
}

export default Spotify