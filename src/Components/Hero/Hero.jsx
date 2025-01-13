import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
import Container from '../Container/Container'
import allContent from '../Data/AllContent'


const Hero = ({setPassingImage}) => {



  const sixArtists = allContent.slice(0,6)
  const artistsLists = sixArtists.map((element)=>{
    return <Container key={element.id} {...element} radius="100%"  
            setPassingImage={setPassingImage}/>
  })
  const sixAlbums = allContent.slice(20,26)
  const albumLists = sixAlbums.map((element)=>{
    return <Container key={element.id} {...element} radius="10px" setPassingImage={setPassingImage}/>
  })
  const sixRadioHits = allContent.slice(37,43)
  const RadioLists = sixRadioHits.map((element)=>{
    return <Container key={element.id} {...element} radius="10px" setPassingImage={setPassingImage}/>
  })
  const sixFeaturedCharts = allContent.slice(55,61)
  const FeaturedChartsLists = sixFeaturedCharts.map((element)=>{
    return <Container key={element.id} {...element} radius="10px" setPassingImage={setPassingImage}/>
  })
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-popularartists-heading">
          <span ><Link to='/allArtists' className="hero-populartists"> Popular artists</Link></span>
          <span  ><Link to='/allArtists' className="hero-showall"> Show all</Link></span>
        </div>
        <div className="hero-artists">
            {artistsLists}
        </div>
      </div>
      <div className="hero-content">
        <div className="hero-popularartists-heading">
           <span ><Link to='/allAlbums' className="hero-populartists"> Popular albums and singles</Link></span>
          {/* <span className="hero-populartists">Popular albums and singles</span> */}
          <span ><Link to='/allAlbums' className="hero-showall"> Show all</Link></span>
        </div>
        <div className="hero-artists">
            {albumLists}
        </div>
      </div>
      <div className="hero-content">
        <div className="hero-popularartists-heading">
          {/* <span className="hero-populartists">Popular radio</span> */}
          <span ><Link to='/AllRadios' className="hero-populartists">Popular radio</Link></span>
          <span ><Link to='/AllRadios' className="hero-showall"> Show all</Link></span>
        </div>
        <div className="hero-artists">
            {RadioLists}
        </div>
      </div>
      <div className="hero-content">
        <div className="hero-popularartists-heading">
          <span className="hero-populartists">Featured Charts</span>
          {/* <span className="hero-showall">Show all</span> */}
        </div>
        <div className="hero-artists">
            {FeaturedChartsLists}
        </div>
      </div>
      
     
    </div>
  )
}

export default Hero