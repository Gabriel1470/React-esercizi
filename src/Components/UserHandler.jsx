import { useState } from "react";
import { Link,Outlet,} from "react-router-dom";


export default function UserHandler(){
const [username,setUsername] = useState(['Gabriel1470'])
const inputHandler=(event)=>{
event.preventDefault()
setUsername(username.concat(event.target.previousSibling.value))

}
return(
    <>
    <form>
        <input type='text'></input>
        <button onClick={inputHandler}>bonnttonner pleas Click!</button>
    </form>
<div>
{username.map(item=>{return(
<div>
<Link to={`${item}`}>{item}</Link>
</div>
)})}
</div>
<Outlet/>
    </>
)

}