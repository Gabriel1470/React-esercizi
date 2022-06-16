
import { ClickCounter } from "./components/ClickCounter";
import { Login } from "./components/Login";


function App() {
  return (
    <div>
      <Login/>
    <ClickCounter initialValue={5}/>
    </div>
  );
}

export default App;
