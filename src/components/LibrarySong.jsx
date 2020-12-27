import React from 'react'

function LibrarySong({isPlaying,audioRef, songs,song,setCurrentSong}) {


    const songSelectorHandler=()=>{
       const selectSong=songs.filter((state)=>state.id===song.id)
       setCurrentSong(selectSong[0])
            if(isPlaying) {
                const playPromise=audioRef.current.play();
                if(playPromise!==undefined){
                    playPromise.then((audio)=>{
                        audioRef.current.play()
                    })
                }
            }
       
    }
    return (
        <div className='LibrarySong' onClick={songSelectorHandler} >
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
