import React from 'react'
import './Main.css'
import Sidebar from '../Sidebar/Sidebar'
import HeroContent from '../HeroContent/HeroContent'



const Main = ({setLanguageOptions,showCreatePlaylist,setShowCreatePlaylist,setScrollPixels}) => {
  return (
    <div className="main">
        <Sidebar setLanguageOptions={setLanguageOptions}
        showCreatePlaylist={showCreatePlaylist}
        setShowCreatePlaylist={setShowCreatePlaylist}/>
        <HeroContent  setScrollPixels={setScrollPixels}/>
       
    </div>
  )
}

export default Main