import { Route, Routes , Link } from 'react-router-dom';
import './App.css';
import Counter from './Components/Counter';
import UserHandler from './Components/UserHandler';
import Welcome from './Components/Welcome'

function App() {
  return (
    <div>
<Link className='disp' to="/" >Welcome</Link>
<Link className='disp' to="/githubuser">Githubuser</Link>
<Link className='disp' to="/counter" >Counter</Link>

      <Routes>
        <Route path='/' element={<Welcome name='NullNanNBan' />}> </Route>
        <Route path='/counter' element={<Counter/>}></Route>
        <Route path='/githubuser'>
          <Route path=':username' element={<UserHandler />} />
        </Route>
        <Route path='*' element={<h1>Error 404</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App