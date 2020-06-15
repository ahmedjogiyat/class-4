import React, {useState} from 'react';
import logo from './logo.svg';

import {Message} from './Message'
import './App.css';

 export default function App() {
  let [count, setCount]=useState(5);
  let [isMorning, setMorning]=useState(true)
  return (
    <div className={`box ${isMorning ? "dayLight" : " "}`}>
       <h1>Day time ={isMorning ? 'Morning':'Night'}</h1>
      <Message counter={count}/>
      <br/>
 
         <button onClick={()=> setCount(++ count )}>update counter</button>
         <button onClick={()=>setMorning(!isMorning )}>Update Day </button>
 
    </div>
  

  
  );
}


