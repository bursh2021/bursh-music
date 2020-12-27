import React, { useState, useCallback, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import styled,{css} from "styled-components";

function InputTweet({  tweets, setTweets, setTextInput, textInput }) {

  const userInputHandler =useMemo(()=>{//useMemo вызвет функцию в тот момент когда измениться состояние tweets
    
return   (e) => {
  setTextInput(e.target.value);//получаем данные с инпута
};
  },[tweets])



  const submitTweetHandler = useMemo(()=>{
    return (
      (e) => {
        let time = new Date().toLocaleTimeString();
        let date= new Date().toLocaleDateString();
        e.preventDefault();
        setTweets([...tweets, { message: textInput, id: uuidv4(), date: date, time : time}]);
        setTextInput("");
      }
    )
  },[textInput])
const [colored,setColored]=useState(false)

  const styles=useMemo(()=>{
    //при рендере компоненты ссылка на объекте изменяется, поэтому нужно кешировать объекты с помощью useMemo
    //но UseMemo нужно использовать только в крайних случаях так как он тоже тратить производительность
    return (
      {color: colored ? 'red': 'blue'}
    )
  },[colored])

React.useEffect(()=>{
  console.log('styled change')
},[styles])



  return (
    <div>
      <Button onClick={()=>setColored(prev=> !prev) } style={styles}>Colored</Button>
     
      
      <form onSubmit={submitTweetHandler}>
        <input value={textInput} onChange={userInputHandler}></input>
        <button>Отправить данные</button>
      </form>
      <TweetList tweets={tweets} setTweets={setTweets} />
    </div>
  );
}  export default InputTweet;

function TweetList({ tweets, setTweets }) {
  return (
    <div>
      <h3>hello i tweet list</h3>
      {tweets.map((tweet) => (
        <Tweet
          key={tweet.id}
          setTweets={setTweets}
         
          tweets={tweets}
          tweetId={tweet.id}
          tweetMessage={tweet.message}
          date={tweet.date}
          time={tweet.time}
        />
      ))}
    </div>
  );
}

function Tweet({ tweetId, tweetMessage, tweets, setTweets,date,time }) {

  // console.log(tweets, 'tweets')
  const deleteTweet = () => {
    setTweets(tweets.filter((t) => t.id !== tweetId));
  };
  return (
    <TweetStyle>
      <span>{tweetMessage}</span>
    <Time>
    <span>{date} <br></br>{time}</span>
   
      <Button dark > like
      <Button onClick={deleteTweet}>Deleate</Button>
      </Button>
      
    </Time>
    </TweetStyle>
  );
}

const TweetStyle = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
  background-color:#353434;
  font-size:22px;
  color:white;
  padding:10px;
  margin:10px 0px;
`;
const Time= styled.div`
  display:flex;
  align-items:center;
  padding-left:20px;
`
const Button = styled.button`


  background: transparent;
  border-radius: 3px;
  border: 2px solid #121313;
  color: #080808;
  margin: 0 1em;
  padding: 0.25em 1em;
  ${props =>
    props.primary &&
    css`
      background: #801035;
      color: white;
    `};
    ${props =>
    props.dark &&
    css`
      background: #10244e;
      color: #f0850c;
    `};
`;
