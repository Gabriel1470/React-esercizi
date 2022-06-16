
import './App.css';
import { Sum } from './components/Sum';
import { Welcome } from './components/Welcome';

function App() {
  return (
    <div>
      <Welcome  name={<strong>Jhon</strong>} age={23}/>

      <Sum numbers={['']}/>
    </div>
  );
}

export default App;
