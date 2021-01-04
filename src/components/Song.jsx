import React from 'react'
import Nav from './Nav'

function Song({currentSong, setSelectedSongs,selectedSongs}) {
    
    return (
        <> 
        <Nav selectedSongs={selectedSongs} setSelectedSongs={setSelectedSongs} />
          <div className='song_container'>
            <img  alt={currentSong.name}
             src={currentSong.cover}/>
             <h1>{currentSong.name}</h1>
            <h1>{currentSong.artist}</h1> 
        </div>
        </>
      
    )
}

export default Song
