import { Route, Routes } from 'react-router-dom';
import './App.css';
import Counter from './Components/Counter';
import Welcome from './Components/Welcome'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Welcome name='NullNanNBan' />}> </Route>
        <Route path='/counter' element={<Counter />}></Route>
      </Routes>
    </div>
  );
}

export default App