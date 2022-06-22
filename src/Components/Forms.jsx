import React from "react";
import { useInputTracker } from "./useImputTracker";



export default function Forms() {
const {username,password,tellMeInputValue,inputHandler} = useInputTracker()   

    return (
        <>
            <form id="prova">
                <input type='text' name='username' onChange={inputHandler} value={username}></input>
                <input type='password' name='password' onChange={inputHandler} value={password}></input>
            </form>
            <button onClick={tellMeInputValue}>SONO UN BELLISSIMO BUTTON</button>
        </>
    )
}