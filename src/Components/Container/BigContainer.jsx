import React from 'react'
import './BigContainer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'

const BigContainer = (props) => {
  return (
    <div className="bigcontainer">
         <img src={props.picture} alt="" style={{borderRadius:props.radius}}/>
        
        <p className='bigcontainer-artist-name'>{props.name}</p>
        <p className='bigcontainer-artist-prof'>{props.second}</p>
        <div className="bigcontainer-play">
        <FontAwesomeIcon icon={faPlay} className='bigcontainer-playButton'/>
        </div>
    </div>
  )
}

export default BigContainer