import React, { useEffect, useState } from 'react';


export default function Stopwatch(props) {

    const [seconds, setSeconds] = useState(0);
    let [hours, setHours] = useState(0);
    let [minutes, setMinutes] = useState(0);
    let [mode, setMode] = useState('start');
    let [pauseIvent, setPauseIvent] = useState(false);

    const stop = () => {
        setMode(mode = 'stop')
    }

    const start = () => {
        setMode('start')
        setSeconds(seconds + 1)
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
            if (mode === 'start') setSeconds(seconds + 1);
            if (mode === 'reset') setMode('start');
        }, 1000);
        return () => {
            clearTimeout(sec);
        }
    }
    const wait = (e) => {
        if (mode != 'pause') {
            setPauseIvent(true)
            let a = setTimeout(() => {
                setPauseIvent(false)
            }, 300)
            if (pauseIvent) {
                e.preventDefault()
                clearTimeout(a)
                pause()
            }
        } else {
            setMode('start')
        }
    }
    useEffect(() => {
        if (seconds >= 60) setSeconds(0)
        switch (mode) {
            case 'start': timer();
                break;
            case 'reset': setSeconds(0);
                timer()
                break;
            case 'stop': setSeconds(0);
                break;
            default:
                break;
        }

    }, [seconds, mode])

    const timerM = () => {

        let min = setTimeout(() => {
            if (mode === 'start') setMinutes(minutes + 1)
            if (mode === 'reset') setMode('start')
        }, 60000);
        return () => {
            clearTimeout(min);
        }
    }

    useEffect(() => {

        if (minutes >= 60) setMinutes(0)

        switch (mode) {
            case 'start': timerM();
                break;
            case 'reset': setMinutes(0);
                timerM()
                break;
            case 'stop': setMinutes(0);
                break;
            default:
                break;
        }

    }, [minutes, mode])

    const timerH = () => {
        let oneHour = 1000 * 60 * 60;
        let hour = setTimeout(() => {
            if (mode === 'start') setHours(hours + 1);
            if (mode === 'reset') setMode('start');
        }, oneHour);
        return () => {
            clearTimeout(hour);
        }
    }

    useEffect(() => {
        if (hours >= 60) setHours(0)
        switch (mode) {
            case 'start': timerH();
                break;
            case 'reset': setHours(0);
                timerH()
                break;
            case 'stop': setHours(0);
                break;
            default:
                break;
        }

    }, [hours, mode])
    let minTab = minutes < 10 ? '0' + minutes : minutes;
    let secTab = seconds < 10 ? '0' + seconds : seconds;
    let hoursTab = hours < 10 ? '0' + hours : hours;

    return (

        <div className="stopwatch">
            <div className="stopwatch__display">
                <div className="stopwatch__tabs">
                    <span className="stopwatch__numbers">{hoursTab}</span>
                    <span className="stopwatch__colon">:</span>
                </div>
                <div className="stopwatch__tabs">
                    <span className="stopwatch__numbers">{minTab}</span>
                    <span className="stopwatch__colon">:</span>
                </div>
                <div className="stopwatch__tabs">
                    <span className="stopwatch__numbers">{secTab}</span>
                </div>

            </div>
            <div className="stopwatch__btns">
                <button className="stopwatch__btn" onClick={stop}>STOP</button>
                <button className="stopwatch__btn" onClick={start}>START</button>
                <button className="stopwatch__btn" onClick={reset}>RESET</button>
                <button className="stopwatch__btn" onClick={wait}>WAIT</button>
            </div>

        </div>
    )
}