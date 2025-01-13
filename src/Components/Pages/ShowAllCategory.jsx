import React from 'react'
import './CSS/ArtistsPage.css'

import BigContainer from '../Container/BigContainer'
// import {SongsContext} from '../../SongsContext/SongsContext'
import allContent from '../Data/AllContent'

const ShowAllCategory = (props) => {

  // const {allContent} = useContext(SongsContext)
    
  
  const bigArtists = allContent.map((element,i)=>{
       if(props.category === element.category){
        if(props.category === "artist"){
             return <BigContainer key={i} {...element} radius="100%"/>;
        }
        else{
          return <BigContainer key={i} {...element} radius="10px"/>; 
        }    
       }
       else{
        return null;
       }
    })
  return (
    <div className='artistpage'>
      <div className="artistpage-populartist">
        <span className="artistpage-populartist-heading">Popular {props.category}s</span>
        {/* <span className="artistpage-showall">Show all</span> */}
      </div>
      <div className="artistpage-artists">
        {bigArtists}
      </div>
    </div>
  )
}

export default ShowAllCategory