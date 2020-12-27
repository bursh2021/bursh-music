import { React, useState } from "react";
import Song from "./components/Song";
import Player from "./components/Player";
import data from './until';

 
function App() {
 

  const [song, setSong] = useState(data());
  const [currentSong, setCurrentSong] = useState(song[0])
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="App">
      <Song currentSong={currentSong} setCurrentSong={setCurrentSong}/> 
       <Player currentSong={currentSong}isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </div>
  );
}

export default App;
