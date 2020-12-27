import { React, useState,useRef} from "react";
import Song from "./components/Song";
import Player from "./components/Player";
import data from './until';
import Library from "./components/Library";

 
function App() {
 
  const audioRef=useRef(null)
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[3])
  const [isPlaying, setIsPlaying] = useState(false)





  const timeUpdateHandler=(e)=>{
    const current=e.target.currentTime
    const duration=e.target.duration
    setSongInfo({...SongInfo, currentTime: current,duration:duration})
}



const [SongInfo, setSongInfo] = useState({
currentTime:null,//current time song
duration:null,//all time song
})

  return (
    <div className="App">
      <Song currentSong={currentSong} setSongs={setSongs} setCurrentSong={setCurrentSong}/> 
       <Player audioRef={audioRef} 
      currentSong={currentSong}
       isPlaying={isPlaying} 
       setIsPlaying={setIsPlaying} 
       setSongInfo={setSongInfo}
       SongInfo={SongInfo}
      
   
       /> 
       <Library audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong}/>
       <audio 
            ref={audioRef}
            src={currentSong.audio}
            onTimeUpdate={timeUpdateHandler}
            onLoadedMetadata={timeUpdateHandler}
            isPlaying={isPlaying}
             ></audio>
    </div>
  );
}

export default App;
