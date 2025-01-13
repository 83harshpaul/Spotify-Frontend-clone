import React from 'react'
import './CSS/Language.css'
import LanguageData from '../Data/LanguageData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

const Language = ({setLanguageOptions}) => {
  return (
    <div className="language" onClick={() => setLanguageOptions("none")}>
        <div className="language-chooselanguage">
        <div className="language-chooselanguage-header">    
                <div className="language-choose">
                    <span className="language-choose-line1">Choose a language</span>
                    <span className="language-choose-line2">This updates what you read on open.spotify.com</span>
                </div>
                <FontAwesomeIcon icon={faXmark} className='language-cross-icon' onClick={() => setLanguageOptions("none")}/>
            </div>
            <div className="language-box">
                {LanguageData.map((element,i)=>{
                    return <div className="language-boxes">
                       <span> {element.lang1}</span>
                       <span className='language-lang2'> {element.lang2}</span>
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Language