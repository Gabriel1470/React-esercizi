import React from "react";
import { createRef } from "react";

export class ToDoList extends React.Component{
input = createRef()
state = {
  item:['maserati','audi','bmw','fiat',],
  addItem:''
}

eventHandler = (event) => {

  this.setState((state)=>{
    console.log()
    return {addItem: state.addItem = event.target.value}
  })
}

saveHandler=()=>{
  this.setState((state)=>{
    console.log()
    return{item:state.item.concat(this.state.addItem)}
  })
}

render(){
  return(
    <div>
      <ul>
        {this.state.item.map((item,index)=>(<li key={index}>{item}</li>))}
      </ul>
      <input type="text" value={this.state.addItem} onChange={this.eventHandler}/>
      <button onClick={this.saveHandler}>Change</button>
    </div>
  )
}

}