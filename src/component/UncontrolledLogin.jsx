import React from "react";
import { createRef } from "react";


export class UncontrolledLogin extends React.Component{
_autoFocus = createRef()
_formRef = createRef()

imputHandler=(event)=>{
  event.preventDefault()
 
  const username = event.target.elements.username.value
  const password = event.target.elements.password.value
  const remember = event.target.elements.remember.checked

  console.log({
    username,password,remember
  })

}
 componentDidMount=()=>{
    this._autoFocus.current.focus()
  }

  render(){
    return(
   <form ref={this._formRef} onSubmit={this.imputHandler}>
<h2>Name:</h2>
<input type="text" name="username"  ref={this._autoFocus} />
<h2>Password:</h2>
<input type="password" name="password" />
<input type="checkbox" name="remember" />
<button type='submit'>Login</button>
<button >Reset</button>
   </form>
    )
  }
}