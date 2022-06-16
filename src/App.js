
import { ClickCounter } from "./components/ClickCounter";
import { Login } from "./components/Login";


function App() {
  function onCounterChange(clock){
    console.log(`The state now is ${clock}`)
  }


  return (
    <div>
      <Login/>
    <ClickCounter onCounterChange={onCounterChange}/>
    </div>
  );
}

export default App;
