import React, { useEffect, useState } from 'react'

function Timer() {


    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)



    let interval = undefined;

    useEffect(() => {



        interval = setInterval(() => {
            setSeconds((sec) => sec + 1)
        }, 1000);

        if (seconds === 59) {
            setSeconds(0)
            setMinutes((min) => min + 1)
        }

        if (minutes === 59) {
            setMinutes(0)
            setHours((hr) => hr + 1)
        }



        return () => clearInterval(interval)
    }, [seconds, minutes, hours])


    const resetTimer = () => {
        clearInterval(interval)
        setSeconds(0)
        setMinutes(0)
        setHours(0)
    }


    return (
        <div className='h-[50%] w-[500px]  flex flex-col items-center justify-between bg-gray-800 p-5 rounded-lg'>
            <h1>Timer</h1>
            <div>
                <span className="countdown font-mono text-3xl text-white">
                    <span style={{ "--value": hours }}></span>h
                    <span style={{ "--value": minutes }}></span>m
                    <span style={{ "--value": seconds }}></span>s
                </span>
            </div>

            <button className="btn btn-primary" onClick={resetTimer}> clean interval</button>

        </div >
    )
}

export default Timer