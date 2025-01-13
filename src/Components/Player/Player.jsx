import React from 'react'
import './Player.css'
import {Link} from 'react-router-dom'

const Player = () => {
  return (
    <div className="player">
        <div className="player-preview">
            <p className="player-preview-line1">Preview of Spotify</p>
            <p className="player-preview-line2">Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
        </div>
        <Link to="/signup" className="player-signup-one"><div className="player-signup">
            Sign up free
        </div>
        </Link>
    </div>
  )
}

export default Player