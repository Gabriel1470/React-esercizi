import {useState} from 'react'
import {incrementCounter,decrementCounter,resetCounter} from './CounterReducer'
import {store} from './Store'




export function Counter(){
  const [counter,setCounter] = useState(0)

  const increment = () => {
    store.dispatch(incrementCounter(1))
    setCounter(store.getState())
  }

  const decrement = () => {
    store.dispatch(decrementCounter(1))
    setCounter(store.getState())
  }

  const reset = () => {
    store.dispatch(resetCounter(1))
    setCounter(store.getState())
  }

  return(
    <>
    <h1>Counter: {counter}</h1>
    <button onClick={increment}>Aumenta</button>
    <button onClick={decrement}>Diminuisce</button>
    <button onClick={reset}>Resetta</button>
    </>
  )


}