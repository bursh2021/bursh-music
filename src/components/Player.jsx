import React,{useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay,faAngleLeft, faAngleRight,faPause } from '@fortawesome/free-solid-svg-icons';
import {playAudio} from '../util';
function Player({ 
    audioRef,
     setIsPlaying, 
     isPlaying,
     SongInfo,
     setSongInfo,
     songs,
     setCurrentSong,
     currentSong,setSongs
    }) {
        useEffect(() => {
            const newSongs=songs.map((song)=>{
                if(song.id===currentSong.id){
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
        }, [currentSong])



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

const SkipTrackHanlder= async (direction)=>{
    let currentIndex=songs.findIndex((song)=>song.id===currentSong.id);
    if(direction==="skip-forward"){
      await  setCurrentSong(songs[(currentIndex + 1) % songs.length] )
    } 
     if (direction ==="skip-back"){
        if(currentIndex===0){
        await    setCurrentSong(songs[(currentIndex -0) % songs.length] )
        } else {
            await   setCurrentSong(songs[(currentIndex - 1) % songs.length] )
        }   
        if(isPlaying){
            audioRef.current.play()
        }
    }
    //  playAudio(isPlaying, audioRef)
}

    return (
        <div className='player'>
            <div className="time_control">
                <p>{getTime(SongInfo.currentTime)}</p>
              
                <input 
                min={0} max={SongInfo.duration || 0} 
                value={SongInfo.currentTime}
                onChange={DragHandler}
                type="range"/>
             
                <p>{SongInfo.duration ? getTime(SongInfo.duration) : null}</p>

            </div>
            <div className="play_control">
            <FontAwesomeIcon className='skip-back'
                onClick={()=>SkipTrackHanlder('skip-back')}
            icon={faAngleLeft}/>
                <FontAwesomeIcon className={isPlaying ? 'play active' : 'play'}
                    onClick={playSongHandler}
                icon={isPlaying ? faPause: faPlay}/>
                <FontAwesomeIcon className='skip-forward' 
                 onClick={()=>SkipTrackHanlder('skip-forward')}
                icon={faAngleRight}/>
            </div> 
        </div>
    )
}

export default Player
