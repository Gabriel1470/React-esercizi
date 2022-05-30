import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component{
  render(){
    return(
      <>
      <Age age={16}/>
      </>
    )
  }
}