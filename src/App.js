import React,{useState} from 'react';
import './App.css';
import DisplayLanguage from './Components/DisplayLenguage';
import LanguageContext,{ Language } from './Components/LanguageContext';

/* Non HO capito context 02 */

export function App(){
   const [language, setLanguage] = useState('en')

   function selectHandler(event){
    setLanguage(event.target.value)
 }

 
    return (
      <div>
        <select value={language} onChange={selectHandler}>
          <option value='en'>ENGLISH</option>
          <option value='it'>ITALIANO</option>
        </select>
        <Language.Provider value={language}>
          <DisplayLanguage>
            <LanguageContext />
          </DisplayLanguage>
        </Language.Provider>
      </div >
    );
  }


export default App;
