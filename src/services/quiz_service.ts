import {Quiz,QuestionType} from './../types/quiz_types'

export const getQuizDetails=async (totalQuestions:number,level:string):Promise<Quiz[]>=>{
const res= await fetch(`https://opentdb.com/api.php?amount=${totalQuestions}&difficulty=${level}&type=multiple`);
let {results}=await res.json();
const quiz=results.map((questionObj:Quiz,ind:number)=>{
    return{
        question:questionObj.question,
        answer:questionObj.correct_answer,
        option:questionObj.incorrect_answers.concat(questionObj.correct_answer)
    }
});
//const results=data.results.map
return results;
}