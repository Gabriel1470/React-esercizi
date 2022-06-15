import React from 'react'


export class ClearLi extends React.Component {

  state = {
    item: ['fiat', 'ford', 'aston', 'lambo'],
    value: ''
  }
  resetBtn = () => this.setState({ item: [] })

  saveHandler = (event) => this.setState({ value: event.target.value });
  pushHandler = (event) => {

    this.setState((state) => {

      return {
        item: state.item.concat(this.state.value),
        value: state.value = ''
      }
    })
  }

  deleteItem = (item) => {
    this.setState((state) => {
      const array = state.item.filter((prop) => { return prop !== item })
      return { todos: state.item = array }



    })
  }




  render() {
    return (
      <>
        <ul>

          <h1>To do list</h1>




          {this.state.item.map((item, index) => {
            return (
              <div>
              <li name="li" key={index}>{item}</li> <button key={index+'btn'} onClick={()=>this.deleteItem(item)}>Delete</button>
              </div>
            )
          })}
          <input type="text" name='inputin' value={this.state.value} onChange={this.saveHandler}></input>
          <button onClick={this.pushHandler}>
            Add
          </button>
          <button onClick={this.resetBtn}>Reset</button>
        </ul>
      </>
    )
  }
}

