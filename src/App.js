import { Route, Routes , Link } from 'react-router-dom';
import './App.css';
import Counter from './Components/Counter';
import UserHandler from './Components/UserHandler';
import Welcome from './Components/Welcome'
import { GithubUser } from './Components/GhithubUser';


function App() {
  return (
    <div>
<Link className='disp' to="/" >Welcome</Link>
<Link className='disp' to="/user">Githubuser</Link>
<Link className='disp' to="/counter" >Counter</Link>

      <Routes>
        <Route path='/' element={<Welcome name='NullNanNBan' />}> </Route>
        <Route path='/counter' element={<Counter/>}></Route>
        <Route path='/user' element={<UserHandler/>} >
          <Route index element={<h2>Search Ghitub users! and click the link</h2>}/>
          <Route path=':username' element={<GithubUser />} />
        </Route>
        <Route path='*' element={<h1>Error 404</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App