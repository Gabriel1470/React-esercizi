
import {GithubUser} from './components/GithubUser'
import { useState } from 'react'


const user = ['Gabriel1470']
function App() {
const [name,setName] = useState('')

function nameHandler(event){
  setName(event.target.value)
}

function dataProvider(event){
  event.preventDefault()
  user.push(event.target.previousElementSibling.defaultValue)
  console.log(user)
setName('')
}



return (
  <div className="App">

    {user.map ((element)=>{return(
      <div style={{border: "1px solid lime,",width:'500px', height:'500px'}}>
      <GithubUser username={element}/>
      </div>
      )})}
   <form onSubmit={dataProvider}>
   <input type='text' name='insertName' value={name} onChange={nameHandler} ></input>
   <button type='submit' onClick={dataProvider}>LAUNCH</button>
   </form>

  </div>
);
}

export default App;
