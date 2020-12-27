import React,{useRef} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay,faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Player({currentSong, setIsPlaying, isPlaying}) {
    const audioRef=useRef(null)
    const playSongHandler=()=>{
        if (isPlaying){
            audioRef.current.pause()
            setIsPlaying(!isPlaying)
        }else
       {audioRef.current.play()
        setIsPlaying(!isPlaying)
    }
      
    }
    return (
        <div className='player'>
            <div className="time_control">
                <p>Start Time</p>
                <input type="range"/>
                <p>End Time</p>

            </div>
            <div className="play_control">
            <FontAwesomeIcon className='skip-back' size="5px" icon={faAngleLeft}/>
                <FontAwesomeIcon className='play'
                    onClick={playSongHandler}
                size='5px' icon={faPlay}/>
                <FontAwesomeIcon className='skip-forward' size='5px' icon={faAngleRight}/>
            </div> 
            <audio  ref={audioRef} src={currentSong.audio} ></audio>
        </div>
    )
}

export default Player
