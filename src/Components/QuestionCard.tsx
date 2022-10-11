import React, { useState } from "react";
import {questionPropsType} from './../types/quiz_types'


const QuestionCard:React.FC<questionPropsType>=({question,options,callback})=>{
    
    let [selectedAns,setSelectedAns]=useState("");
    const handelSelection=(ev:any)=>{
        setSelectedAns(ev.target.value)
    }
    return(
        <div className="question-container">
            <div className="question">
                {question}
            </div>
            <form onSubmit={(e:React.FormEvent<EventTarget>)=>callback(e,selectedAns)}>
                {
                    options.map((opt:string,ind:number)=>{
                        return(
                            <div>
                                <label>
                                    <input type="radio" name="opt" required value={opt} checked={selectedAns===opt} onChange={handelSelection}/>
                                    {opt}
                                </label>
                            </div>

                        )
                    })
                }
                <input type="submit" />
            </form>
        </div>
    )
}

export default QuestionCard