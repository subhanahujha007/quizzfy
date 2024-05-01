type props={
scorepercentage:number,
totalquwstion:number,
score:number,
}
export const Quizsubmission=(props:props)=>{
const {score,scorepercentage,totalquwstion}=props
    return(
<div className="flex flex-col flex-1">
<main className="py-11 flex flex-col mt-10 gap-4 items-center ">
<h2>Quizz completed</h2>
<p>you scored:{scorepercentage}%</p>
</main>
</div>
    )
}