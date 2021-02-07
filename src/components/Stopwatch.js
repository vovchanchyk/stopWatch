import React, { useEffect, useState } from 'react';


export default function Stopwatch(props) {

    const [currentValue, setCurrentValue] = useState(135);
  
    let [mode, setMode] = useState('start');
  

    const stop = () => {
        setMode(mode = 'stop')
    }

    const start = () => {
        setMode('start')
        setCurrentValue(currentValue + 1)
    }

    const pause = () => {
        setMode(mode = 'pause')
    }

    const reset = () => {
        if (mode == 'pause') {
            setMode('clean')
        } else {
            setMode('reset')
        }
    }

    let timer = () => {
        let sec = setTimeout(() => {
            if (mode === 'start') setCurrentValue(currentValue + 1);
            if (mode === 'reset') setMode('start');
        }, 1000);
        return () => {
            clearTimeout(sec);
        }
    }
 
    useEffect(() => {
        if (currentValue >= 60) setCurrentValue(0)
        switch (mode) {
            case 'start': timer();
                break;
            case 'reset': setCurrentValue(0);
                timer()
                break;
            case 'stop': setCurrentValue(0);
                break;
            default:
                break;
        }

    }, [currentValue, mode])


    let hours = Math.floor(currentValue/60/60).toString().padStart(2,'0');
    let minutes = (Math.floor(currentValue/60) - (hours*60)).toString().padStart(2,'0');
    let seconds = (currentValue%60).toString().padStart(2,'0')
  
console.log(minutes)

    return (

        <div className="stopwatch">
            <div className="stopwatch__display">
                <div className="stopwatch__tabs">
                    <span className="stopwatch__numbers">{hours}</span>
                    <span className="stopwatch__colon">:</span>
                </div>
                <div className="stopwatch__tabs">
                    <span className="stopwatch__numbers">{minutes}</span>
                    <span className="stopwatch__colon">:</span>
                </div>
                <div className="stopwatch__tabs">
                    <span className="stopwatch__numbers"></span>
                </div>

            </div>
            <div className="stopwatch__btns">
                <button className="stopwatch__btn" onClick={stop}>STOP</button>
                <button className="stopwatch__btn" onClick={start}>START</button>
                <button className="stopwatch__btn" onClick={reset}>RESET</button>
                <button className="stopwatch__btn">WAIT</button>
            </div>

        </div>
    )
}