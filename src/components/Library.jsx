import React from 'react'
import LibrarySong from './LibrarySong'

function Library({isPlaying,songs,setCurrentSong,audioRef}) {
    return (
        <div className='library'>
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
                />)}
            </div>
        </div>
    )
}

export default Library
