import React from "react";

export class Login extends React.Component{
state={
  username : '',
  password : '',
  remember : '',
}

inputHandler=(event)=>{
const name = event.target.name
const value = event.target.value
const remember = event.target.checked
const type = event.target.type

console.log(name)
console.log(value)
console.log(remember)
console.log(type)

this.setState({
  [name]: type === 'checkbox' ? remember : value
})

}
  render(){
    return(
      <div>
        <h2>Name:</h2>
        <input type="text" name="username" value={this.state.username} onChange={this.inputHandler}/>
        <h2>Password:</h2>
        <input type="password" name="password" value={this.state.password} onChange={this.inputHandler}/>
        <input type="checkbox" name="remember" value={this.state.remember} onChange={this.inputHandler}/>
      </div>
    )
  }


}