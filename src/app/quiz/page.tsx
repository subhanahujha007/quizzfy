"use client"
import { Button } from "@/components/ui/button"
import { useState } from "react"
export default function page(){
    const questions=[
        {
            QuestionText:"what is React",
            answers:[
                {
                    answerstext:"A library for building user interfaces",
                    isCorrect:"true",id:1
                },
                {
                    answerstext:"A database",
                    isCorrect:"true",id:1
                },  {
                    answerstext:"A middleware",
                    isCorrect:"true",id:1
                } , {
                    answerstext:"A backend testing software",
                    isCorrect:"true",id:1
                }
            ]
        },{
            QuestionText:"what is jsx",
            answers:[
                {
                    answerstext:"A library for building user interfaces",
                    isCorrect:"true",id:1
                },
                {
                    answerstext:"A database",
                    isCorrect:"true",id:1
                },  {
                    answerstext:"A combination of html and javascript",
                    isCorrect:"true",id:1
                } , {
                    answerstext:"A combination of html and css",
                    isCorrect:"true",id:1
                }
            ]
        },{
            QuestionText:"what is virtual DOM",
            answers:[
                {
                    answerstext:"A virtual representation for Dom",
                    isCorrect:"true",id:1
                },
                {
                    answerstext:"A Dom",
                    isCorrect:"true",id:1
                },  {
                    answerstext:"A middleware",
                    isCorrect:"true",id:1
                } , {
                    answerstext:"A backend testing software",
                    isCorrect:"true",id:1
                }
            ]
        }
    ]
    const [currentquestion,setcurrentquestions]=useState(0)
    const [start,setstart]=useState(false)
    const handleclick=()=>{
        if(!start){
        setstart(true)
    return;
}
if(currentquestion  < questions.length -1){
    setcurrentquestions(currentquestion+1)
}
            }
 return(<div className="flex flex-col flex-1">
 {!start ?<h1>Welcome to the quizz page</h1>:(
    <div className="flex  flex-col flex-1 gap-3">
        <h1>{questions[currentquestion].QuestionText}</h1>
      {
        questions[currentquestion].answers.map(
            answer=>{return(
                <Button variant={"secondary"}>
                        {answer.answerstext}
                </Button>
            )}
        )
      }
    </div>
 )}
 <footer>
 <Button onClick={handleclick}>
    {!start ? 'Start' : 'Next'}
 </Button>
 </footer>
 
 </div>)  
}