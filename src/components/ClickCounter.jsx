import React from "react";
import {useState, useEffect } from "react";




export function ClickCounter({ initialValue = 0, onCounterChange }) {
  const [clock, setCounter] = useState(initialValue)

  useEffect(() => {
    onCounterChange(clock)
  })



    function handleIncrement(){
     return(setCounter(clock + 1))
    }

    return(

    <div>
      <h1>Clock:{clock}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )


}
