import React from 'react'
import LibrarySong from './LibrarySong'

function Library({setSelectedSongs,selectedSongs, setSongs,data,isPlaying,songs,setCurrentSong,audioRef}) {
    return (
        <div  onClick={()=>setSelectedSongs(!selectedSongs)} className={selectedSongs ? "rgba" : ""}>
          
        <div className={selectedSongs ? "library" : 'library active'}>
            <h2>Library</h2>
            <div className="library_songs">
                {songs.map(song=> <LibrarySong 
                key={song.id} 
                song={song}
                songs={songs}
                songName={song.name}
                songId={song.id}
                songCover={song.cover}
                setCurrentSong={ setCurrentSong}
                isPlaying={isPlaying}
                audioRef={audioRef}
                data={data}
                setSongs={setSongs}
                />)}
            </div>
            
            </div>
        </div>
    )
}

export default Library
