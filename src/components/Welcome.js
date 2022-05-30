import React from "react";
import { Age } from "./Age";

 export class Welcome extends React.Component{
  
  render(){
    return(
      <div>
      

        {!! this.props.name  && <h1>Welcome, {this.props.name}!</h1> }
       {!! this.props.age && <p>Your age is {this.props.age}</p>}
     <Age age={34}/>
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