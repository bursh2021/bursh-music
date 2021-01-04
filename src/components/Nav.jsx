import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMusic, } from '@fortawesome/free-solid-svg-icons';
function Nav({setSelectedSongs,selectedSongs}) {
    return (
        <div className='Nav' onClick={()=>setSelectedSongs(!selectedSongs)}>
            <div className='nav_flex'>
                <h2>Waves</h2>
                <span className="skip_back">
                    <p>Library</p>
                <FontAwesomeIcon   icon={faMusic}/>
                </span>
           
            </div>
           
        </div>
    )
}

export default Nav
