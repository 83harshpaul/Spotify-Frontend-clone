import React, { createContext } from 'react'
import allContent from '../Components/Data/AllContent'



export const SongsContext = createContext(null)

const SongsContextProvider = (props) => {

    const contextValue={allContent}
  
    return (
        <SongsContext.Provider value={contextValue}>
            {props.children}
        </SongsContext.Provider>
    )
  }
  export default SongsContextProvider