import React,{useEffect, useState} from 'react';
import './App.css';
import {getQuizDetails} from './services/quiz_service'
import {QuestionType} from './types/quiz_types'
import QuestionCard from './Components/QuestionCard'
function App() {


  let[quiz,setQuiz]=useState<QuestionType[]>([])

  let[currentStep,setCurrentStep]=useState(0)
  useEffect(()=>{
   async function fetchData(){
    const questions:QuestionType[]= await getQuizDetails(5,'easy');
    console.log(questions);
    setQuiz(questions);
   }
   fetchData()
  ;
  },[]);
const handleSubmit=(e:any)=>{
  e.preventDefault();
  if(currentStep!==quiz.length-1){
    setCurrentStep(++currentStep);
  }
else{
  alert("Quiz Completed.")  
}
}
  if(!quiz.length){
    return <h3>loading...</h3>

  }
  return (
    <div className="App">
      <QuestionCard
      options={quiz[currentStep].option}
      question={quiz[currentStep].question}
      callback={handleSubmit}
      />
    </div>
  );
}

export default App;
