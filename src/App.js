
import './App.css';
import { Sum } from './components/Sum';
import { Welcome } from './components/Welcome';

function App() {
  return (
    <div>
      <Welcome  name={<strong>Jhon</strong>} age={23}/>

      <Sum numbers={[2,4,5,78,6,43,234]}/>
    </div>
  );
}

export default App;
