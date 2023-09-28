
import React, { useContext } from 'react'
import Feed from './Feed'
import DataContext from './Context/DataContext'

const Home = () => {
  const {searchResults,fetchError,isLoading}=useContext(DataContext)
  return (
   <main className='Home'>
    
      {isLoading && <p className='statusMsg' style={{display:"flex",justifyContent:"center",fontSize:"2rem",alignItems:"center",height:"30vh"}}>Loading Posts...</p>}
      {!isLoading && fetchError && <p className='statusMsg' style={{color:"red"}}>{fetchError}</p>}
      {!isLoading && !fetchError && (searchResults.length ? 
        <Feed posts={searchResults}/>
        :<p className='statusMsg'>No posts to display</p>
        )}
     
        
    
   </main>
  )
}

export default Home
