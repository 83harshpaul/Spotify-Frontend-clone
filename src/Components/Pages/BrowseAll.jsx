import React from 'react'
import './CSS/BrowseAll.css'
import BrowseData from '../Data/BrowseData'
import AllEntertainment from '../Container/AllEntertainment' 

const BrowseAll = () => {
    const allData = BrowseData.map((element, index) =>{
        return <AllEntertainment key={index} {...element} />
    })
  return (
    <div className="browse-all">
        <p className="browse-all-heading">Browse all</p>
        <div className="browse-all-content">
        {allData}
        </div>
    </div>
  )
}

export default BrowseAll