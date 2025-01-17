import React,{useRef} from 'react'
import './CSS/MoreDetailedData.css'
import moreDetailed from '../Data/DetailedData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import {faPlus } from '@fortawesome/free-solid-svg-icons'
import {faEllipsis } from '@fortawesome/free-solid-svg-icons'
import {faPlay } from '@fortawesome/free-solid-svg-icons'
import playbutton from '../Assests/playbutton.png'
import albumsData from '../Data/AlbumData'
import artistData from '../Data/ArtistData'
import Container from '../Container/Container'
import allContent from "../Data/AllContent"

const MoreDetailedData = ({scrolledPixels,passingImage,setPlayerData,pauseSong,setAudioSource,setPause}) => {
    const [showMoreSongs, setShowMoreSongs] = React.useState(false)
   
    // console.log(audioSource)
    
    const firstElement = moreDetailed[passingImage-1];
    
    const songlist = firstElement.popularSongs;
    const playCurrentSong = useRef(null)
    const getSongName = useRef(null)
    const [playThisSong,setPlayThisSong] = React.useState("1")
    
    React.useEffect(()=>{
      setAudioSource(document.querySelector("audio"))
    },[])
  

    function handlePlayPause(event){
      return new Promise(resolve =>{
        setTimeout(()=>{
          const element = event.target;
          const currentSongNo = element.parentNode.parentNode.textContent;
          setPlayerData(songlist[Number(currentSongNo)-1])
          setPlayThisSong(currentSongNo)
  
          resolve();
        },500)
      });
    }
    // function playingSong(){
    //   return new Promise(resolve =>{
    //     setTimeout(()=>{
    //      playCurrentSong.current.play();
    //      resolve();
    //     },1000)
    //  })
    // }
    function playingSong(){
      return new Promise(resolve =>{
        setTimeout(()=>{
          setPause();
         resolve();
        },1000)
     })
    }

    
    const controlSongs = async (event)=>{
       await handlePlayPause(event);
       await playingSong();
      
    }

 
      
    
    const showMore =() =>{
        setShowMoreSongs(true);
    }
    const showLess =() =>{
        setShowMoreSongs(false);
    }

        const opacity1 = 0.0066666666666667*scrolledPixels;
        let finalOpacity = Math.floor(opacity1*100)
        if(finalOpacity<10){
           finalOpacity = 0
        }
         if(finalOpacity >= 96){
          finalOpacity = 99
        }
        // console.log(scrolledPixels)
        // let navbarFinalOpacity
        // if(scrolledPixels >= 330 && scrolledPixels <=360){
        //   const navbarOpacity = 0.0333333333333333*(scrolledPixels-330);
        //   let navbarFinalOpacity = Math.floor(navbarOpacity*10)
          
          
        // }
        
        
        // let navbarContentOpacity 

        // if(scrolledPixels >= 440){
        //   const navbarContentOpacity = 1
        // }

        const boxoneNavbar = useRef(null)
        const navbarPlayButton = useRef(null)
        const navbarContentName = useRef(null)
        React.useEffect(()=>{
          if(scrolledPixels >= 330 && scrolledPixels <=360){
            const navbarOpacity = 0.0333333333333333*(scrolledPixels-330);
            let navbarFinalOpacity = Math.floor(navbarOpacity*10)
            boxoneNavbar.current.style.opacity= navbarFinalOpacity/10;
            
          }
          if(scrolledPixels >=361){
            boxoneNavbar.current.style.opacity= "1"
            boxoneNavbar.current.style.position= "fixed"
            boxoneNavbar.current.style.top= "77px"
          }
          if(scrolledPixels >= 420){
            navbarPlayButton.current.style.opacity ="1"
            navbarContentName.current.style.opacity ="1"
        }
        },[scrolledPixels])

       
   
  return (
    <div className="moreDetailedData" >
         <div className="moreDetailedData-backgroundPhoto" style={{backgroundImage:`url(${firstElement.photo1})`}}>
            {/* <img src={firstElement.photo1} alt="" /> */}
            <div className="moreDetailedData-liftedbox">
              <div className="moreDetailedData-boxone" style={{backgroundColor: `rgba(${firstElement.backGroundColor}, 0.${finalOpacity})`}}>
                  <span className="moreDetailedData-verified"><FontAwesomeIcon icon={faCircleCheck} className='moreDetailedData-tick'/><span>Verified Artist</span></span>
                  <span className="moreDetailedData-artistName">{firstElement.name}</span>
                  <span className="moreDetailedData-totalListeners">{firstElement.totalListeners} monthly listeners</span>
                  <div className="moreDetailedData-boxone-navbar"  ref={boxoneNavbar} style={{backgroundColor:`rgb(${firstElement.backGroundColor})`}}>
                       <img src={playbutton} alt=""  className='boxone-playButton' ref={navbarPlayButton} />
                       <span className="moreDetailedData-navbar-artistName" ref={navbarContentName}>{firstElement.name}</span>
                  </div>
              </div>
              <div className="moreDetailedData-boxtwo" style={{background:`linear-gradient(to bottom, rgb(${firstElement.backGroundColor}) 1%, #131313 10%)`}}>
                      <div className="moreDetailedData-boxtwo-playbutton">
                        <img src={playbutton} alt=""  className='container-playButton' />
                        <span className="moreDetailedData-followbutton">Follow</span>
                        <div className="moreDetailedData-threebigdots">
                          <div></div>
                          <div></div>
                          <div></div>
                       </div>
                   </div>
                   <span className="moreDetailedData-popular">Popular</span>
                   <div className="moreDetailedData-songslist">
                      {songlist.slice(0,showMoreSongs ? 10 : 5).map((element,i)=>{
    
                        return <div className="moreDetailedData-songs" key={element.SNo}  >
                                    <div className="moreDetailedData-songs-three">
                                      <span className="moreDetailedData-sno">
                                         <FontAwesomeIcon icon={faPlay} className='moreDetailedData-play' onClick={controlSongs}/>
                                         <span className="moreDetailedData-showSno"> {element.SNo}</span>
                                         {/* <audio src={`${firstElement.songsAudios[playThisSong-1].song}`} ref={playCurrentSong}/> */}
                                         <audio src={`${songlist[playThisSong-1].song}`} ref={playCurrentSong}/>
                      
                                      </span>  
                                      <img src={element.picture} alt=""/>
                                      <span className="moreDetailedData-songname" ref={getSongName}>{element.songName}</span>
                                    </div>
                                    <span className='moreDetailedData-timesListened'>{element.timesListened}</span>
                                    <div className='moreDetailedData-addfavorites'>
                                      <FontAwesomeIcon icon={faPlus} className='moreDetailedData-addfavorites-icon'/>
                                      <span className='moreDetailedData-songLength'>{element.songLength}</span>
                                      <span className='moreDetailedData-threesmalldots'><FontAwesomeIcon icon={faEllipsis} /></span>
                                    </div>
                               </div>;
                      })}
                      
                   <span className='moreDetailedData-seeless' onClick={ showMoreSongs? showLess : showMore}>Show {showMoreSongs? "less":"more"}</span>
                   </div>
                   <div className='moreDetailedData-discography'>
                      <div className='moreDetailedData-discography-header'>
                        <span className='moreDetailedData-disconame'>Discography</span>
                        <span className='moreDetailedData-showall'>Show all</span>
                      </div>
                      <div className='discography-fourOptions'>
                        <div>Popular releases</div>
                        <div>Albums</div>
                        <div>Singles and EPs</div>
                        <div>Compilations</div>
                      </div>
                      <div className='moreDetailedData-albums'>
                          {albumsData.slice(0,6).map((element, index) =>{
                            return <Container key={index} {...element} radius="10px" />
                          })}
                      </div>
                   </div>
                   <div className='moreDetailedData-featuringartist'>
                          <div className='moreDetailedData-featuringartist-header'>
                            <span className='moreDetailedData-featureName'>Featuring {firstElement.name}</span>
                            <span className="moreDetailedData-showall">Show all</span>
                          </div>
                          <div className='moreDetailedData-featurealbums'>
                            {allContent.slice(40,46).map((element, index) =>{
                              return <Container key={index} {...element} radius="10px"/>
                            })}
                          </div>
                   </div>
                   <div className='moreDetailedData-fansAlsoLike'>
                          <div className='moreDetailedData-featuringartist-header'>
                            <span className='moreDetailedData-featureName'>Fans also like</span>
                            <span className="moreDetailedData-showall">Show all</span>
                          </div>  
                          <div className='moreDetailedData-artistFansAlsoLike'>
                            {artistData.slice(0,6).map((element, index) =>{
                              return <Container key={index} {...element} radius="100%"/>
                            })}
                          </div>   
                            
                   </div>
                   <div className='moreDetailedData-appearsOn'>
                          <div className='moreDetailedData-featuringartist-header'>
                            <span className='moreDetailedData-featureName'>Appears On</span>
                            <span className="moreDetailedData-showall">Show all</span>
                          </div>  
                          <div className='moreDetailedData-appearsAlbums'>
                              {albumsData.slice(5,11).map((element, index) =>{
                                return <Container key={index} {...element} radius="10px"/>

                              })}
                          </div>
                   </div>
                   <div className='moreDetailedData-artistPlaylist'>
                            <span className='moreDetailedData-featureName artist'>Artist Playlist </span>
                            <div className='moreDetailedData-Playlists'>
                              {albumsData.slice(3,6).map((element,index)=>{
                                return <Container key={index} {...element} radius="10px"/>
                              })}
                            </div>    
                   </div>
                   <div className='moreDetailedData-discoveredOn'>
                          <div className='moreDetailedData-featuringartist-header'>
                            <span className='moreDetailedData-featureName'>Discovered on</span>
                            <span className="moreDetailedData-showall">Show all</span>
                          </div>
                          <div className='moreDetailedData-discoveredPlaylists'>
                            {albumsData.slice(11,18).map((element,index)=>{
                              return <Container key={index} {...element} radius="10px"/>
                            })}
                          </div>   
                   </div>
                   <div className='moreDetailedData-about'>
                            <span className='moreDetailedData-about-header'>About</span>
                            <div className='moreDetailedData-aboutArtist'>
                              <div className='moreDetailedData-ArtistInfo'>
                                  <img src={firstElement.photo2} alt=''/>
                                  <div className='moreDetailedData-rank'>
                                      <span className='rankintheworld'>
                                        <span className='rank-line1'>#79</span>
                                        <span className='rank-line2'>in the world</span>
                                      </span>
                                  </div>
                              </div>
                              <div className='moreDetailedData-about-monthlyListeners'>{firstElement.totalListeners} monthly listeners</div>
                            </div>
                   </div>

              </div>
            </div>
         </div >

    </div>
  )
}

export default MoreDetailedData