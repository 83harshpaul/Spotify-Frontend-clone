import React from 'react'
import Navbar from '../Navbar/Navbar'
import Main from '../Main/Main'

const MainPlusNavbar = ({setLanguageOptions,showCreatePlaylist,setShowCreatePlaylist,
                          setNavbarInputBorder,navbarInputBorder,setScrollPixels}) => {
  return (
    <div className="Main+Navbar">
      <Navbar setNavbarInputBorder={setNavbarInputBorder} navbarInputBorder={navbarInputBorder}/>
      <Main setLanguageOptions={setLanguageOptions}
            showCreatePlaylist={showCreatePlaylist}
            setShowCreatePlaylist={setShowCreatePlaylist}
            setScrollPixels={setScrollPixels}
            />
    </div>
  )
}

export default MainPlusNavbar









