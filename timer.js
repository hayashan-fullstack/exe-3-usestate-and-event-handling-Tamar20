import React, { useState, useRef } from 'react';
export const Timer = () => {

    const [minute, setMinute] = useState(0)
    const [second, setSecond] = useState(0)
    const timeout = useRef(null)
    console.log(minute)
    console.log(second)
    
    timeout.current = setTimeout(() =>{

        if (second == 59){
            setSecond(0)
            setMinute(minute + 1)
        }
        else setSecond(second + 1)
         //counter++
    }, 1000)

    const restart = () => {
        console.log(timeout)
        if(timeout.current != null) {
             clearTimeout(timeout.current)
        }
       
    setSecond(0)
    setMinute(0)
    }
    
    
    return (
        <div style={{ margin: '10%' , fontSize:60}}>

            <h1>timer</h1>
            <h2> {minute}:{second}</h2>
            <br />
            <button onClick={restart}>restart</button>
        </div>
    )
}