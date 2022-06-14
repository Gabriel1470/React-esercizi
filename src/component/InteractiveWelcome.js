import React from "react";
import {Welcome} from "./Welcome";

export class InteractiveWelcome extends React.Component{
  state = {
    name:''
  }

handleImputChange = (event) => {
  this.setState((state) =>{
   return {name: state.name = event.target.value}
  })
}
render(){
  return (
    <div>
      <input value={this.state.name} onChange = {this.handleImputChange}/>
      <Welcome name={this.state.name}/>
    </div>
  )
}


}