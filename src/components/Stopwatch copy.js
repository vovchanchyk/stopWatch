import React, { useEffect, useState } from 'react';


export default function Stopwatch(props) {

const [time,setTime]=useState({h:0,m:0,s:0})
const [timer,setTimer]=useState()

let updateH = time.h, updateM =time.m, updateS = time.s;

const run=()=>{
    if(updateM === 60){
        updateM = 0
        updateH++
    }
    if(updateS === 60){
        updateS = 0;
        updateM++
    }
    updateS++
    return setTime({h:updateH,m:updateM,s:updateS})
}
const start=()=>{
  setTimer(setInterval(()=>run(),1000))     
}
const stop=()=>{  
  setTimer(clearInterval(timer))
  setTime({h:0,m:0,s:0})
}
const reset=()=>{
    setTime({h:0,m:0,s:0})
}

useEffect(()=>{
    
})

console.log(1)
    return (
       
        <div className="stopwatch">
            <div className="stopwatch__display">
                <span></span>
                <div className="stopwatch__tabs">
                    <span className="stopwatch__numbers">{Math.floor(time.h/60/60).toString().padStart(2,'0')}</span>
                    <span className="stopwatch__colon">:</span>
                </div>
                <div className="stopwatch__tabs">
                    <span className="stopwatch__numbers">{(Math.floor(time.m/60) - (time.h*60)).toString().padStart(2,'0')}</span>
                    <span className="stopwatch__colon">:</span>
                </div>
                <div className="stopwatch__tabs">
                    <span className="stopwatch__numbers">{(time.s%60).toString().padStart(2,'0')}</span>
                </div>

            </div>
            <div className="stopwatch__btns">
                <button className="stopwatch__btn" onClick={stop}>STOP</button>
                <button className="stopwatch__btn" onClick={start}>START</button>
                <button className="stopwatch__btn" onClick={reset}>RESET</button>
                <button className="stopwatch__btn" >WAIT</button>
            </div>

        </div>
    )
}