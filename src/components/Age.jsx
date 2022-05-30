import React from "react";

export class Age extends React.Component{
  render(){
    return(
    <>
    {(this.props.age >= 18) && <h1>your age is: {this.props.age}</h1>}
    </>
    )
  }
}

