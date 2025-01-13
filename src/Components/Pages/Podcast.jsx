import React from 'react'
import './CSS/Podcast.css'
import podcastData from '../Data/PodcastData'
import BigContainer from  '../Container/BigContainer'
import AllEntertainment from '../Container/AllEntertainment'


const Podcast = () => {

    const bestEpisodes = podcastData.slice(0,5)
    const celebritiespods = podcastData.slice(6,9)
    const cricketpods = podcastData.slice(10,14)
    const podsCategories = podcastData.slice(15,33)

    
  return (
    <div className="podcast">
        <div className="podcast-header">Poscasts</div>
        <div className="podcast-content">
            <p className='podcast-content-headings'>Best episodes of the week</p>
            <div className="podcast-content-albums">
                {bestEpisodes.map((element,i)=>{
                    return <BigContainer key={i} {...element} radius="10px"/>
                })}
            </div>    
            <p className='podcast-content-headings'>Hosted by celebrities</p>
            <div className="podcast-content-albums">
                {celebritiespods.map((element,i)=>{
                    return <BigContainer key={i} {...element} radius="10px"/>
                })}
            </div>    
            <p className='podcast-content-headings'>Essential cricket podcasts</p>
            <div className="podcast-content-albums">
                {cricketpods.map((element,i)=>{
                    return <BigContainer key={i} {...element} radius="10px"/>
                })}
            </div>  
            <p className="podcast-content-headings">Categories</p>  
            <div className="podcast-content-categories">
                {podsCategories.map((element,i)=>{
                    return <AllEntertainment key={i} {...element} />
                })}
            </div> 
        </div>
    </div>
  )
}

export default Podcast