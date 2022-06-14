import react, { createRef } from 'react';

export class UncontrolledLogin extends react.Component {
    _formRef = createRef()

    inputHandler = (event) => {
        event.preventDefault()

        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked

        console.log(
            {
                username,
                password,
                remember
            }
        )

    }

    handlerFormPrefill = () => {
        this._formRef.current.elements.username.value = "Jhones"
        this._formRef.current.elements.password.value = "passwordsicura123"
        this._formRef.current.elements.remember.checked = true;

    }

    render() {

        return (
            <div>
                <form ref={this._formRef} onSubmit={this.inputHandler}>
                    <div>
                        <h3>Nome:</h3>
                        <input type="text" name="username" /></div>
                    <div>
                        <h3>Password:</h3>
                        <input name="password" type="password" />
                        <input name="remember" type="checkbox" />
                        <button type="submit">Login</button>
                        <button type='reset' >Reset</button>
                        <button type='button' onClick={this.handlerFormPrefill}>Prefill</button>
                    </div>
                </form>
            </div>
        )
    }

}