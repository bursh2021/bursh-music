import React, { useState } from 'react';
import InputTweet from './InputTweet'


 const Input=()=> {
    
    const [textInput, setTextInput] = useState("");
    const [tweets, setTweets] = useState([]);
    return(
        <>
 <InputTweet
        tweets={tweets}//массив с инпута
        setTweets={setTweets}//change массив инпута
        setTextInput={setTextInput}// change input
        textInput={textInput} // value input
    />
     </>
    )
}
export default Input