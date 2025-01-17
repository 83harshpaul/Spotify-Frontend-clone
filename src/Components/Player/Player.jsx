import React from 'react'
import './Player.css'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShuffle } from '@fortawesome/free-solid-svg-icons'
import {faCaretLeft} from '@fortawesome/free-solid-svg-icons'
import {faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import {faCaretRight } from '@fortawesome/free-solid-svg-icons'
import {faRepeat } from '@fortawesome/free-solid-svg-icons'
import {faPlay } from '@fortawesome/free-solid-svg-icons'
import {faCirclePause } from '@fortawesome/free-solid-svg-icons'
import {faMicrophoneLines} from '@fortawesome/free-solid-svg-icons'
import {faBarsStaggered} from '@fortawesome/free-solid-svg-icons'
import {faBullhorn} from '@fortawesome/free-solid-svg-icons'
import {faVolumeOff} from '@fortawesome/free-solid-svg-icons'
import {faVolumeXmark} from '@fortawesome/free-solid-svg-icons'
import {faVolumeLow} from '@fortawesome/free-solid-svg-icons'
import {faVolumeHigh} from '@fortawesome/free-solid-svg-icons'
import {faTv} from '@fortawesome/free-solid-svg-icons'
import {faUpRightAndDownLeftFromCenter} from '@fortawesome/free-solid-svg-icons'
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import artistPhoto from '../Assests/alb1.png'

const Player = ({playerData,setPauseSong,pauseSong,audioSource,setPause}) => {
  const PlayerDataIsEmpty = Object.keys(playerData).length === 0 ? true : false ;
//   const setPause =()=>{
//     if(audioSource){
//         if(pauseSong){
//             audioSource.pause();  
//         }
//         else{
//             audioSource.play();
//         }
//         setPauseSong(!pauseSong);
//     }    
   
//   }
  return (
    <>
    { PlayerDataIsEmpty && (<div className="player">
        <div className="player-preview">
            <p className="player-preview-line1">Preview of Spotify</p>
            <p className="player-preview-line2">Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
        </div>
        <Link to="/signup" className="player-signup-one"><div className="player-signup">
            Sign up free
        </div> 
        </Link>
    </div>)}
    {!PlayerDataIsEmpty && (<div className="songplayer">
        <div className="songplayer-leftpart">
            <img src={playerData.picture} alt="" />
            {/* <img src={artistPhoto} alt="" /> */}
            <div className="songplayer-leftpart-artistinfo">
                {/* <span className="sonplayer-songname">{playerData.songName}</span> */}
                <span className="sonplayer-songname">{playerData.songName}</span>
                <span className="sonplayer-artistname">Pritam</span>
            </div>
            {/* <div className="songplayer-addtoplaylist">+</div> */}
            {/* <FontAwesomeIcon icon={faCirclePlus} /> */}
            <FontAwesomeIcon icon={faPlus} className="sonplayer-leftpart-plussign" />
        </div>
        <div className="songplayer-midpart">
            <div className="songplayer-midpart-controls">
                <FontAwesomeIcon icon={faShuffle} className='songplayer-controls-buttons'/>
                <div className="songplayer-midpart-leftbutton">
                    <div className="songplayer-midpart-rect"></div>
                    <FontAwesomeIcon icon={faCaretLeft} className='songplayer-control-buttons navigate'/>
                </div>
                {/* <FontAwesomeIcon icon={faCirclePlay} className='songplayer-controls-buttons mainbutton'/> */}
                <FontAwesomeIcon icon={pauseSong? faCirclePause : faCirclePlay} className='songplayer-controls-buttons mainbutton' onClick={setPause}/>
                <div className="songplayer-midpart-leftbutton">
                    <FontAwesomeIcon icon={faCaretRight} className='songplayer-control-buttons navigate'/>
                    <div className="songplayer-midpart-rect"></div>
                </div>               
                <FontAwesomeIcon icon={faRepeat} className='songplayer-controls-buttons'/>
            </div>
            <div className="songplayer-midpart-songlength">
                <span className='songplayer-midpart-songcompleted'>0:00</span>
                <div className="songplayer-midpart-part">
                    <div className='songplayer-midpart-partcompleted'></div>
                </div>
                {/* <span className='songplayer-midpart-totalsonglength'>{playerData.songLength}</span> */}
                <span className='songplayer-midpart-totalsonglength'>{playerData.songLength}</span>
            </div>
        </div>
        <div className="songplayer-rightpart">
        <FontAwesomeIcon icon={faPlay} className='songplayer-rightbuttons nowplaying'/>
        <FontAwesomeIcon icon={faMicrophoneLines} className='songplayer-rightbuttons'/>
        <FontAwesomeIcon icon={faBarsStaggered} className='songplayer-rightbuttons'/>
        <FontAwesomeIcon icon={faBullhorn} className='songplayer-rightbuttons'/>
        {/* <FontAwesomeIcon icon={faVolumeXmark} /> */}
        <FontAwesomeIcon icon={faVolumeOff} className='songplayer-rightbuttons'/>
        {/* <FontAwesomeIcon icon={faVolumeLow} />
        <FontAwesomeIcon icon={faVolumeHigh} /> */}
        <div className="songplayer-rightpart-volumebar">
            <div></div>
        </div>
        <FontAwesomeIcon icon={faTv} className='songplayer-rightbuttons' />
        <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} className='songplayer-rightbuttons'/>
        </div>
    </div>)}
    </>
  )
}

export default Player