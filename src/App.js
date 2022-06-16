import React from 'react';
import './App.css';
import DisplayLanguage from './Components/DisplayLenguage';
import { LanguageContext,Language } from './Components/LanguageContext';



export class App extends React.Component   {
       state = {
    language: 'it'
  }

  selectHandler = (event) => {
    this.setState((state) => {
      return { language: state.language = event.target.value }
    })
  };

  render(){
    return (
      <div>
        <select value={this.state.language} onChange={this.selectHandler}>
          <option value='en'>ENGLISH</option>
          <option value='it'>ITALIANO</option>
        </select>
        <Language.Provider value={this.state.language}>
          <DisplayLanguage>
            <LanguageContext />
          </DisplayLanguage>
        </Language.Provider>
      </div >
    );
  }
}

export default App;
