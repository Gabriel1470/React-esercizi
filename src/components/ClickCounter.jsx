import React from "react";

export class ClickCounter extends React.Component {
  state = {
    count: this.props.initValue ?? 0,
  }

  incrementState=()=>{
this.setState({count: this.state.count + 1})
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>

<button onClick={this.incrementState}>Click meeeeeeeeeeeeee!!!!!!!!!!!</button>

      </div>
    )
  }

}
