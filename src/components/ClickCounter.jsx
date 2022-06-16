import React from "react";
import { useState } from "react";



export function ClickCounter({initialValue = 0}){
  const [clock,setCounter ]= useState(initialValue)

 function handleIncrement() {
    setCounter(c => c+1)
  }


    return (
      <div>
        <h1>Clock:{clock}</h1>
        <button onClick={handleIncrement}>Increment</button>
      </div>
    )
  

}
