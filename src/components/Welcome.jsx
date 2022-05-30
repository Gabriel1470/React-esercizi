import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component{
  render(){
    return(
      <>
      {/* esercizio 01 */}
      {/*  {(this.props.age >= 18) && <Age age= {this.props.age}/>} */}
       {/* esercizio 02 */}
    {/* {!!(this.props.age) && <Age age= {this.props.age}/>} */}
    {/* esercizio 03 */}
    {/* {(this.props.age > 18 ) && (this.props.age < 65 ) && <Age age={this.props.age}/>} */}
    {/* esercizio 04 */}
    {(this.props.age > 18 ) && (this.props.age < 65 ) && (this.props.name === 'Jhon') && <Age age={this.props.age}/>}
      </>
    )
  }
}