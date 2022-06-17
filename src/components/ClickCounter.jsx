import React from "react";
import {useState, useEffect } from "react";




export function ClickCounter({ initialValue = 0}) {
 


  const [clock, setCounter] = useState(initialValue)
  const intHandler = ()=> setInterval(()=>{
            setCounter(clock + 1)
        },500)



useEffect(()=>{
  intHandler()
},[])


  useEffect(() => {
    return()=>{
      clearInterval(intHandler)
      console.log('Component reset')
    }
  },[clock])

    return(

    <div>
      <h1>Clock:{clock}</h1>
    </div>
  )


}
