import React from "react";

export class Counter extends React.Component{
state = {
  count: this.props.initValue ?? 0,
}

componentDidMount(){
setInterval(()=>{
         this.setState((state)=>{
          return{ count: state.count + (this.props.increment ?? 1)}
           })
           }, (this.props.interval ?? 1000))
}

 /*
 Effettivamente divento inutile
 
 constructor(props){
   super(props)
  } */

  render(){
   return (
   <h1>Count: {this.state.count}</h1>
   )
  }
  
}
