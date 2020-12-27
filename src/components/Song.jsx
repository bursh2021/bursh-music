import React from 'react'

function Song({currentSong}) {
    
    return (
        <div className='song_container'>
            <img  alt={currentSong.name}
             src={currentSong.cover}/>
             <h1>{currentSong.name}</h1>
            <h1>{currentSong.artist}</h1> 
        </div>
    )
}

export default Song
