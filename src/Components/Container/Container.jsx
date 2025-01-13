import React from 'react'
import './Container.css'
import playbutton from '../Assests/playbutton.png'
import {Link} from 'react-router-dom'

const Container = (props) => {
  const [containerBackgroundColor,setConatinerackgroundColor] = React.useState(false)
 
  const whichElement = (id) =>{
      props.setPassingImage(id)
    
  }
  // const containerBackground = ()=>{
  //   setConatinerackgroundColor(true)
  // }
  return (
    <Link to="/moreDetails" className="container-link"><div className="container" onClick={()=>whichElement(props.id)}>
    {/* // onClick={containerBackground} style={{backgroundColor:containerBackgroundColor? "#131313":"transparent"}}> */}
        {/* <div className="container-artist-image"> */}
        <img src={props.picture} alt="" style={{borderRadius:props.radius}}/>
        
        <p className='container-artist-name'>{props.name}</p>
        <p className='container-artist-prof'>{props.second}</p>
        <div className="container-play">
        <Link to="/signUpFirst"><img src={playbutton} alt=""  className='container-playButton' onClick={()=>whichElement(props.id)}/></Link>
        {/* <FontAwesomeIcon icon={faPlay} className='container-playButton'/> */}
        </div>
    </div></Link>
  )
}

export default Container