import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component{
  render(){
    return(
      <>
      {/* esercizio 01 */}
       {(this.props.age >= 18) && <Age age= {this.props.age}/>}
       {/* esercizio 02 */}
    {!!(this.props.age) && <Age age= {this.props.age}/>}
   
      </>
    )
  }
}