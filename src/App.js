import React from 'react'
import './App.css';
import BrowseAll from './Components/Pages/BrowseAll';
import { BrowserRouter,Routes,Route, useLocation } from 'react-router-dom';
import Spotify from './Components/Spotify/Spotify';
import SignUp from './Components/Pages/SignUp';
import Login from './Components/Pages/Login';
import ShowAllCategory from './Components/Pages/ShowAllCategory';
import Hero from './Components/Hero/Hero'
import Podcast from './Components/Pages/Podcast'
import Language from './Components/Pages/Language'
import SignupOrLoginFirst from './Components/Pages/SignupOrLoginFirst'
import MoreDetailedData from './Components/Pages/MoreDetailedData' 

function App() {
  const [languageOptions,setLanguageOptions] = React.useState("none")
  const [showCreatePlaylist,setShowCreatePlaylist] = React.useState("hidden")
  const [navbarInputBorder,setNavbarInputBorder] = React.useState("none")
  const [passingImage,setPassingImage] = React.useState("1")
  const [scrolledPixels,setScrollPixels] = React.useState("")
  const [playerData, setPlayerData] = React.useState({})
  // console.log(playerData)
  const createplaylistClasses = [ "createplaylist","createplaylist-heading","createplaylist-sub","createplaylist-button"]  
  const navbarInputClasses = ["navbar-search-icon","navbar-search","navbar-input"]
  const inputNavbarStyles = {
    border:"2px solid #fff",
    backgroundColor:"#323131",
    cursor:"default"
  }
 
  const handleMouseMove = (event) => {
    const element = event.target; // Get the element under the cursor
    // console.log(element.parentNode.parentNode.textContent)
    
    if(showCreatePlaylist === "visible"){
        if(createplaylistClasses.includes(element.className)){
          setShowCreatePlaylist("visible")
        }
        else{
          setShowCreatePlaylist("hidden")
        }
    }
    else if(JSON.stringify(navbarInputBorder) === JSON.stringify(inputNavbarStyles)){
      console.log(element)
      if(navbarInputClasses.includes(element.className)){
        setNavbarInputBorder(inputNavbarStyles)
      }
      else{
        setNavbarInputBorder("none")
      }
    }
   
  };
  const location = useLocation();

  const isSignUpFirstRoute = location.pathname === "/signUpFirst";

  return (
    <div className="App"  onClick={handleMouseMove}>
      <div
        className="main-content"
        style={{
          opacity: isSignUpFirstRoute ? 0.6 : 1,
          pointerEvents: isSignUpFirstRoute ? "none" : "auto", // Prevent interaction with the main content when overlay is active
        }}
      >
      
      <Routes>
          <Route path="/" element={<Spotify setLanguageOptions={setLanguageOptions}
                                            showCreatePlaylist={showCreatePlaylist}
                                            setShowCreatePlaylist={setShowCreatePlaylist}
                                            navbarInputBorder={navbarInputBorder}
                                            setNavbarInputBorder={setNavbarInputBorder}
                                            setScrollPixels={setScrollPixels}
                                            playerData={playerData} 
                                            />}>
              <Route index element={<Hero setPassingImage={setPassingImage}/>} />
              <Route path="allArtists" element={<ShowAllCategory category="artist" />} />
              <Route path="allAlbums" element={<ShowAllCategory category="album"/>} />
              <Route path="allRadios" element={<ShowAllCategory category="radio"/>} />
              <Route path="browseall" element={<BrowseAll />}/>
              <Route path="podcast" element={<Podcast />}/> 
              <Route path="moreDetails" element ={<MoreDetailedData scrolledPixels={scrolledPixels} passingImage={passingImage} 
                                                                    setPlayerData={setPlayerData}/>}/>       
          </Route>
          
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signUpFirst" element={<SignupOrLoginFirst passingImage={passingImage}/>} className="app-morinfo" />
      </Routes>  
     
    
      </div>

      {isSignUpFirstRoute && (
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1000,
            backgroundColor: "rgba(0, 0, 0, 0.8)", // Optional dark overlay
            pointerEvents: "auto",
          }}
        >
          <SignupOrLoginFirst passingImage={passingImage} />
        </div>
      )}

      <div className="languages" style={{display:`${languageOptions}`}}>
      <Language setLanguageOptions={setLanguageOptions} /> 
      </div> 
      
    </div>
    
  );
}


export default App;
