

import { useState } from "react";

const TimerStart=()=>{
    const[timer,setTimer]=useState(20)
    const startTimer=()=>{
        setInterval(()=>{
                 setTimer(pretimer=>pretimer-1)
        },1000)
    }
    return(
        <div>
            <h3>TimerStart</h3>
            <button onClick={startTimer}>start timer</button>
            <h3 style={{
                color:timer<=10?"red":"green"
            }}>{timer}</h3>
            {
                timer<=10 && <h3>exam about to end</h3>
            }
        </div>
    )
}
export default TimerStart;