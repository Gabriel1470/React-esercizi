import React from "react";

export class ClickCounter extends React.Component {
  state = {
    btnName: '',
  }

  incrementState=(event)=>{
this.setState({btnName: event.target.innerText})
  }

  render() {
    return (
      <div>
        <h1>Last button:{this.state.btnName}</h1>

<button name="btn-1" onClick={this.incrementState}>Click meeeeeeeeeeeeee!!!!!!!!!!!</button>
<button name="btn-2" onClick={this.incrementState}>Nooooooooo Click meeee!!!!</button>
<button name="btn-ita" onClick={this.incrementState}>perche non io scusa</button>

      </div>
    )
  }

}
