import React from "react";



export class LoginBTN extends React.Component{
state = {
  username: '',
  password: '',
  remember: false,
  login: true

}

imputHandler=(event)=>{
  const name = event.target.name
  const value = event.target.value
  const remember = event.target.checked
  const type = event.target.type


this.setState({
  [name] : type === 'checkbox' ? remember : value,
  login:this.state.username !== '' || this.state.password !== '' ? false : true
})
}

onLogin=()=>{
  console.log(this.state)
}

onReset=()=>{
  this.setState({
    password:'',
    username: '',
    remember: false,
    login: true,
  })
}

  render(){
    return(
   <div>
<h2>Name:</h2>
<input type="text" name="username" value={this.state.username} onChange={this.imputHandler}/>
<h2>Password:</h2>
<input type="password" name="password" value={this.state.password} onChange={this.imputHandler} />
<input type="checkbox" name="remember" value={this.state.remember} onChange={this.imputHandler} />
<button type='submit' disabled={this.state.login} onClick={this.onLogin}>Login</button>
<button onClick={this.onReset}>Reset</button>
   </div>
    )
  }
}