import React from 'react'
import {playAudio} from '../util';



const LibrarySong=({isPlaying,
    audioRef,
    songId,
     songs,
     song,
     setSongs,
    setCurrentSong})=> {


    const songSelectorHandler= async ()=>{
       const selectSong=songs.filter((state)=>state.id===songId)
       await setCurrentSong(selectSong[0])
     

            const newSongs=songs.map((song)=>{
                if(song.id===songId){
                    return {
                        ...song, active:true,
                    }
                } else{
                    return {
                        ...song, active:false
                    }
                } 
               
            })
            setSongs(newSongs)
    }
    if(isPlaying){
        audioRef.current.play()
    }
    return (
        <div
         className={song.active ? 'LibrarySong selected' : 'LibrarySong'}
          onClick={songSelectorHandler} >
            <img  alt={song.name}
             src={song.cover}/>
             <div>
             <h1>{song.name}</h1>
            <p>{song.artist}</p> 
             </div>

            
        </div>
    )
}

export default LibrarySong
