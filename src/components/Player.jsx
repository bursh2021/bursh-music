import React,{useRef,useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay,faAngleLeft, faAngleRight,faPause } from '@fortawesome/free-solid-svg-icons';

function Player({ 
    audioRef,
   
     setIsPlaying, 
     isPlaying,
     SongInfo,
     setSongInfo,
    
    }) {
        const getTime=(time)=> {//base function for music player
            return (
                Math.floor(time/60)+ ':' +('0' +Math.floor(time % 60)).slice(-2)
            )
       } 
       const DragHandler=(e)=>{//change for input
        audioRef.current.currentTime=e.target.value
            setSongInfo({...SongInfo, currentTime:e.target.value})
    }
    const playSongHandler=()=>{//bol for pause or play
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
                <p>{getTime(SongInfo.currentTime)}</p>
                <input 
                min={0} max={SongInfo.duration} 
                value={SongInfo.currentTime}
                onChange={DragHandler}
                type="range"/>
                <p>{getTime(SongInfo.duration)}</p>

            </div>
            <div className="play_control">
            <FontAwesomeIcon className='skip-back' size="5px" icon={faAngleLeft}/>
                <FontAwesomeIcon className={isPlaying ? 'play active' : 'play'}
                    onClick={playSongHandler}
                size='5px' icon={isPlaying ? faPause: faPlay}/>
                <FontAwesomeIcon className='skip-forward' size='5px' icon={faAngleRight}/>
            </div> 
       
        </div>
    )
}

export default Player
