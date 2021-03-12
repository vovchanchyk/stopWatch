/* eslint-disable react/button-has-type */
import React, { useEffect, useRef, useState } from 'react';

export default function Stopwatch() {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0 });
  const [timer, setTimer] = useState();
  const [mode, setMode] = useState('stop');
  let updateH = time.h;
  let updateM = time.m;
  let updateS = time.s;

  const run = () => {
    if (updateM === 60) {
      updateM = 0;
      updateH++;
    }
    if (updateS === 60) {
      updateS = 0;
      updateM++;
    }
    updateS++;
    return setTime({ h: updateH, m: updateM, s: updateS });
  };

  const start = () => {
    setMode('start');
  };
  const stop = () => {
    setMode('stop');
  };
  const reset = () => {
    setTime({ h: 0, m: 0, s: 0 });
    clearInterval(timer);
    setMode('reset');
  };
  const waitArr = useRef([]);

  const wait = () => {
    const timeOfClick = Date.now();
    waitArr.current.push(timeOfClick);
    if (mode === 'wait') {
      waitArr.current = [];
      setMode('start');
    }
    const difference = waitArr.current[1] - waitArr.current[0];
    if (difference < 300) setMode('wait');
    if (waitArr.current.length === 2) waitArr.current = [];
  };

  useEffect(() => {
    switch (mode) {
      case 'stop':
        clearInterval(timer);
        setTime({ h: 0, m: 0, s: 0 });
        break;
      case 'start':
        setTimer(setInterval(() => run(), 1000));
        break;

      case 'reset':
        setMode('start');

        break;

      default:
        clearInterval(timer);
        break;
    }
  }, [mode]);

  useEffect(() => {});
  return (
    <div className="stopwatch">
      <div className="stopwatch__display">
        <span />
        <div className="stopwatch__tabs">
          <span className="stopwatch__numbers">
            {time.h.toString().padStart(2, '0')}
          </span>
          <span className="stopwatch__colon">:</span>
        </div>
        <div className="stopwatch__tabs">
          <span className="stopwatch__numbers">
            {time.m.toString().padStart(2, '0')}
          </span>
          <span className="stopwatch__colon">:</span>
        </div>
        <div className="stopwatch__tabs">
          <span className="stopwatch__numbers">
            {time.s.toString().padStart(2, '0')}
          </span>
        </div>
      </div>
      <div className="stopwatch__btns">
        <button className="stopwatch__btn" onClick={stop}>
          STOP
        </button>
        <button className="stopwatch__btn" onClick={start}>
          START
        </button>
        <button className="stopwatch__btn" onClick={reset}>
          RESET
        </button>
        <button className="stopwatch__btn" onClick={wait}>
          WAIT
        </button>
      </div>
    </div>
  );
}
