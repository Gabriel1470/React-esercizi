import React from "react";
import { Age } from "./Age";

 export function Welcome(props) {
  
    return(
      <div>
        {!! props.name  && <h1>Welcome, {props.name}!</h1> }
       {!! props.age && <p>Your age is {props.age}</p>}
     <Age age={34}/>
      </div>
    )

}
 

/* export function Welcome(){
  let fieldProps = {
    name: "Jhon"
  };

    return <h1>Welcome {this.name}</h1>
  }
} */