import { Route, Routes } from 'react-router-dom';
import './App.css';
import Welcome from './Components/Welcome'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Welcome name='NullNanNBan' />}> </Route>
      </Routes>
    </div>
  );
}

export default App