import logo from './logo.svg';
import './App.css';
/* esercizio 01 */
let Hello = <><h1>Hello World!</h1></>
/* esercizio 02 */
function Name(param){
   param = "Jhon"
  return(
    <h1>Hello {param}</h1>
  )
}
/* esercizio 05 */
function Sum(a,b){
  a=4; b=5;
  
   return (
     <h2>{a+b}</h2>
   )
  
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {Hello}
      <Name/>
      <Sum/>
    </div>
  );
}

export default App;
