import react, { createRef } from 'react';

export class NewLogin extends react.Component {
    _formRef = createRef()
    _passwordRed=createRef()


    state={
        password:''
    }




    inputHandler = (event) => {
        this.setState((state)=>{return{
            password: state.password=event.target.value
        }})
     

    }

   
    
    render() {

        const buttonStyle={
         backgroundColor:   this.state.password.length < 8 ? "red" : "green"
        }
        return (
            <div>
                <form ref={this._formRef} onSubmit={this.inputHandler}>
                    <div>
                        <h3>Nome:</h3>
                        <input type="text"  name="username" /></div>
                    <div>
                        <h3>Password:</h3>
                        <input name="password"  value={this.state.password} onChange={this.inputHandler}type="password" />
                        <input name="remember" type="checkbox" />
                        <button type="button" style={buttonStyle}>Login</button>
                        <button type='reset' >Reset</button>
                    </div>
                </form>
            </div>
        )
    }
   

}
