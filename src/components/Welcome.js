import React from "react";

 export class Welcome extends React.Component{
  
  render(){
    return(
      <div>
      

        {!! this.props.name  && <h1>Welcome, {this.props.name}!</h1> }
       {!! this.props.age && <p>Your age is {this.props.age}</p>}
     
      </div>
    )
  }
}
 

/* export function Welcome(){
  let fieldProps = {
    name: "Jhon"
  };

    return <h1>Welcome {this.name}</h1>
  }
} */