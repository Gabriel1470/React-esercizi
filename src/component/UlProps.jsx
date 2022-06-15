import {createRef} from "react";
import React from "react";


export class UlProps extends React.Component{
  input=createRef()
  state ={
    list: ['colt','kar98k','m4a1','m16'],
    addItem: ''
  }

  deleteHandler = (item) => {
      const array = this.state.list.filter((items) => items != item);
      this.setState({
          list: this.state.list = array
      })
  }

  eventHandler = (event) => {

    this.setState((state) => {
      console.log()
      return { addItem: state.addItem  }
    })
  }

  saveHandler = () => {
    this.setState((state) => {
      console.log()
      return { item: state.list.concat(this.state.addItem) }
    })
  }



  render() {


      return (
        <div>
          {this.props.children(this.state.list, this.deleteHandler,this.eventHandler,this.saveHandler,this.state.addItem)}
          </div>
      )
  }
}
