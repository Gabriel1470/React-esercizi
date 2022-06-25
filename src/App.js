import { Route, Routes } from 'react-router-dom';
import './App.css';
import Counter from './Components/Counter';
import UserHandler from './Components/UserHandler';
import Welcome from './Components/Welcome'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Welcome name='NullNanNBan' />}> </Route>
        <Route path='/counter' element={<Counter/>}></Route>
        <Route path='/githubuser'>
          <Route path=':username' element={<UserHandler />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App