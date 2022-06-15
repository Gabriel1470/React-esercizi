import React from "react";
import { UlProps } from "./component/UlProps";




function App() {

  return (
    <div >
     <UlProps>
     {((list,deleteHandler,eventHandler,addItem,saveHandler)=>{
      
          return(
            <div>
              <ul>
              {list.map((item,i)=>{
                return(
                  <li key={i}>{item} <button onClick={()=>{deleteHandler(item)}} key={i+'btn'}>Delete</button></li>
                )
              })}
             
                
                
            </ul>
            
                <input type="text" value={addItem} onChange={eventHandler()} />
                <button onClick={()=>{saveHandler()}}>Add Item</button>
                </div>
          )})}
     </UlProps>
    </div>
  );
}

export default App;
