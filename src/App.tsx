import React,{useEffect, useState} from 'react';
import './App.css';
import {getQuizDetails} from './services/quiz_service'
import {QuestionType} from './types/quiz_types'
import QuestionCard from './Components/QuestionCard'
function App() {


  let[quiz,setQuiz]=useState<QuestionType[]>([])

  let[currentStep,setCurrentStep]=useState(0)
  let[score,setScore]=useState(0)
  let[showResult,setShowResult]=useState(false);
  useEffect(()=>{
   async function fetchData(){
    const questions:QuestionType[]= await getQuizDetails(5,'easy');
    console.log(questions);
    setQuiz(questions);
   }
   fetchData()
  ;
  },[]);
const handleSubmit=(e:React.FormEvent<EventTarget>,userAns:string)=>{
  e.preventDefault();
  
  const currentQuestion:QuestionType=quiz[currentStep];
  console.log("corrct ans:"+currentQuestion.correct_answer+"--user selected:"+userAns)
if(userAns===currentQuestion.correct_answer){
setScore(++score);
}
  if(currentStep!==quiz.length-1){
    setCurrentStep(++currentStep);
  }
else{
  
  setShowResult(true);
}
}
  if(!quiz.length){
    return <h3>loading...</h3>

  }
  if(showResult){
    return(<div className='question-container'>
      <h2>Result:</h2>
      <p className='result-text'>Your final score is <b>{score}</b> out of <b>{quiz.length}</b>.</p>
    </div>)
  }
  return (
    <div className="App">
      <h1>FAST Quiz Testing Service</h1>
      <QuestionCard
      options={quiz[currentStep].option}
      question={quiz[currentStep].question}
      callback={handleSubmit}
      />
    </div>
  );
}

export default App;
