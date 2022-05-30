
import './App.css';
import { Welcome } from './components/Welcome';

function App() {
  return (
    <div>
      <Welcome  name={<strong>Jhon</strong>} age={23}/>
    </div>
  );
}

export default App;
