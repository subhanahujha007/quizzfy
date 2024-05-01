"use client"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Quizsubmission } from "./quizsubmission"
import ProgressBar from "@/components/ui/ProgressBar"
import {ChevronLeft,X} from "lucide-react"
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
                    isCorrect:"false",id:1
                },  {
                    answerstext:"A middleware",
                    isCorrect:"false",id:1
                } , {
                    answerstext:"A backend testing software",
                    isCorrect:"false",id:1
                }
            ]
        },{
            QuestionText:"what is jsx",
            answers:[
                {
                    answerstext:"A library for building user interfaces",
                    isCorrect:"false",id:1
                },
                {
                    answerstext:"A database",
                    isCorrect:"false",id:1
                },  {
                    answerstext:"A combination of html and javascript",
                    isCorrect:"true",id:1
                } , {
                    answerstext:"A combination of html and css",
                    isCorrect:"false",id:1
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
                    isCorrect:"false",id:1
                },  {
                    answerstext:"A middleware",
                    isCorrect:"false",id:1
                } , {
                    answerstext:"A backend testing software",
                    isCorrect:"false",id:1
                }
            ]
        }
    ]
    const [currentquestion,setcurrentquestions]=useState(0)
    const [start,setstart]=useState(false)
    const [score,setscore]=useState<number>(0)
    const [submit,setsubmit]=useState<boolean | null>(null)
    const [iscorrect,setiscorrect]=useState<boolean | null>(null)
    const [selectedanswer,setselectedanswer]=useState<number | null>(null)
    const handleclick=()=>{
        if(!start){
        setstart(true)
    return;
}
if(currentquestion  < questions.length -1){
    setcurrentquestions(currentquestion+1)
}else{
    setsubmit(true)
    return;
}
setselectedanswer(null)
setiscorrect(null)
}
const handleanswer = (answer: any) => {
    setselectedanswer(answer.id);
    const iscurrentcorrect = answer.isCorrect === "true"
    if (iscurrentcorrect) {
        setscore(score + 1);
    }
    setiscorrect(iscurrentcorrect);
};
if(submit){
    return <Quizsubmission
    score={score}
    totalquwstion={questions.length}
    scorepercentage={Math.round((score/questions.length)*100)}
    />
}
 return(<div className="flex flex-col flex-1">
    <div className="position-sticky top-0 z-10  shadow-md py-4 w-full">
       <header className="grid grid-cols-[auto,1fr,auto] grid-flow-col items-center justify-between py-2 gap-2 ">
       <Button size="icon" variant="outline"><ChevronLeft/></Button>
       <ProgressBar value={(currentquestion /questions.length)*100} />
        <Button size="icon" variant="outline"><X/></Button >
       </header>
    </div>
 {!start ?<h1>Welcome to the quizz page</h1>:(
    <div className="flex  flex-col flex-1 gap-3">
        <h1>{questions[currentquestion].QuestionText}</h1>
      {
        questions[currentquestion].answers.map(
            answer=>{return(
                <Button variant={"secondary"} onClick={()=> handleanswer(answer)}>
                
                        {answer.answerstext}
                </Button>
            )}
        )
      }
    </div>
 )}
 <footer>
    
 <p>{iscorrect==null ? "" :( iscorrect == true ? "correct" :"incorrect")}</p>
 <Button onClick={handleclick}>
    {!start ? 'Start' : (currentquestion === questions.length-1 ? 'Submit' : 'Next')}
 </Button>
 </footer>
 
 </div>)  
}