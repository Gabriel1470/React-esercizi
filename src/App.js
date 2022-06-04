import { Counter } from "./components/Counter";

function App() {
  return (
    <div>
    <Counter initValue={0} increment={3} interval={500} />
    </div>
  );
}

export default App;
