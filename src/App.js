
import { ClickCounter } from "./components/ClickCounter";
import { Login } from "./components/Login";
import {useState} from 'react'


function App() {

const [toggle,setToggle] = useState(true)




  function onCounterChange(clock){
    console.log(`The state now is ${clock}`)
  }

  function btnHandler(){
    setToggle(y=>!y)
  }


  return (
    <div>
      <Login/>
   {toggle && <ClickCounter onCounterChange={onCounterChange}/>}
   <button onClick={btnHandler}>Reset</button>
    </div>
  );
}

export default App;
