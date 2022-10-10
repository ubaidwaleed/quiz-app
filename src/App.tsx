import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {getQuizDetails} from './services/quiz_service'

function App() {
  useEffect(()=>{
   async function fetchData(){
    const questions= await getQuizDetails(5,'easy');
    console.log("questions");
   }
   fetchData()
  ;
  },[]);

  return (
    <div className="App">
  
    </div>
  );
}

export default App;
