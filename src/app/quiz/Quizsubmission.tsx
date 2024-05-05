import { ArcElement, Chart as ChartJs ,Legend,Tooltip } from "chart.js"
import {Pie} from "react-chartjs-2"
type props={
scorepercentage:number,
totalquwstion:number,
score:number,
}
ChartJs.register(
 ArcElement,
 Tooltip,
 Legend   
)
export const Quizsubmission=(props:props)=>{
const {score,scorepercentage,totalquwstion}=props
 const data={
    labels:["correct","incorrect"],
    datasets:[
        {
            data:[Math.round((scorepercentage * totalquwstion)/100),totalquwstion-Math.round((scorepercentage * totalquwstion)/100)],
            backgroundColor:["green","red"]
        }
    ]
 }
 return(
<div className="flex flex-col flex-1">
<main className="py-11 flex flex-col mt-10 gap-4 items-center ">
<h2>Quizz completed</h2>
<p>you scored:{scorepercentage}%</p>
<Pie data={data}/>
</main>
</div>
    )
}