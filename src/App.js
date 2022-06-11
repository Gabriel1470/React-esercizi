
import { CounterDisplay } from "./components/CounterDisplay";

function App() {
  return (
    <div>
    <CounterDisplay initValue={0} increment={3} interval={500} />
    </div>
  );
}

export default App;
