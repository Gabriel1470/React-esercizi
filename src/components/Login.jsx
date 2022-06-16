import {useState} from 'react'


export function Login(){
  const [user,setUser]=useState({
    username:'',
    password:'',
    remember:false
})


const handleInputs=(event)=>{
    const {value,type,checked,name} = event.target
    return(setUser(
        (user)=>{
            return({
                ...user,
                [name]:type==='checkbox'?checked:value
            })
        }
    ))
}

console.log(user)
    return(
        <>
        <h2>Name:</h2>
        <input type='text' name='username'  onChange={handleInputs} value={user.username}></input>
        <h2>Password:</h2>
        <input type='password' name='password' onChange={handleInputs}  value={user.password}></input>
        <input type='checkbox' name='remember' onChange={handleInputs}  value={user.remember}></input>
        </>
    )
}