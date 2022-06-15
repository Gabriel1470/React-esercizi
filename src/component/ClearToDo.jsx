import React from 'react'


export class ClearToDo extends React.Component {

    state = {
        item: ['fiat', 'ford', 'aston', 'lambo'],
        value: ''
    }

    saveHandler = (event) => this.setState({ value: event.target.value });
    pushHandler = (event) => {
       
        this.setState((state) => {

            return {
                item: state.item.concat(this.state.value),
                value: state.value=''
            }
        })
    }


    render() {
        return (
            <>
                <ul>
                    <h1>To do list</h1>
                    {this.state.item.map((item, index) => {
                        return (
                            <li key={index}>{item}</li>
                        )
                    })}
                    <input type="text" name='inputin' value={this.state.value} onChange={this.saveHandler}></input>
                    <button  onClick={this.pushHandler}>
                        Add
                    </button>
                </ul>
            </>
        )
    }
}

