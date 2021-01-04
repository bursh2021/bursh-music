import { React, useState,useRef} from "react";
import Song from "./components/Song";
import Player from "./components/Player";
import data from './until';
import Library from "./components/Library";


 
function App() {
 
  const audioRef=useRef(null)
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)

  const [selectedSongs, setSelectedSongs] = useState(false)



  const timeUpdateHandler=(e)=>{
    const current=e.target.currentTime
    const duration=e.target.duration
    setSongInfo({...SongInfo, currentTime: current,duration:duration})
}



const [SongInfo, setSongInfo] = useState({
currentTime:null,//current time song
duration:0,//all time song
})


const songEndHandler= async()=>{
  let currentIndex=songs.findIndex((song)=>song.id===currentSong.id);
    await  setCurrentSong(songs[(currentIndex + 1) % songs.length] )
    if(isPlaying){
      audioRef.current.play()
    }
}

  return (
    <div className={selectedSongs ? 'App': 'Libarary_active'}>
   
      <Song 
      setSelectedSongs={setSelectedSongs}
      selectedSongs={selectedSongs}
      currentSong={currentSong}
       setSongs={setSongs}
        setCurrentSong={setCurrentSong}/> 

       <Player audioRef={audioRef} 
      currentSong={currentSong}
       isPlaying={isPlaying} 
       setIsPlaying={setIsPlaying} 
       setSongInfo={setSongInfo}
       SongInfo={SongInfo}
       songs={songs}
       setCurrentSong={setCurrentSong}
       currentSong={currentSong}
       setSongs={setSongs}
       /> 
       <Library
       setSelectedSongs={setSelectedSongs}
       selectedSongs={selectedSongs}
       isPlaying={isPlaying}
        audioRef={audioRef}
        songs={songs}
        setSongs={setSongs}
         setCurrentSong={setCurrentSong}/>
       <audio 
            ref={audioRef}
            src={currentSong.audio}
            onTimeUpdate={timeUpdateHandler}
            onLoadedMetadata={timeUpdateHandler}
            onEnded={songEndHandler}
             ></audio>
    </div>
  );
}

export default App;
