import React from 'react'

function Song({setCurrentSong, currentSong}) {
    console.log('currentSong',currentSong)
    return (
        <div className='song_container'>
            <img src={currentSong.cover}></img>
             <h1>{currentSong.name}</h1>
            <h1>{currentSong.artist}</h1> 
        </div>
    )
}

export default Song
