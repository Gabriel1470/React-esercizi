import { useEffect , useState } from "react";
import { useParams } from "react-router-dom";

export function GithubUser(){
const {username} = useParams()
const [dati,setDati] = useState('')
const [err,setErr] = useState(false)

async function userFetch() {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    console.log(username)
    if(response.status === 200){
      const info = await response.json()
      setDati(info)
    }
    else{
throw new Error('User inesistente/impossibile comunicare con il server')
    }
  }catch(err){
    return setErr(err)
  }
}

useEffect(()=>{
  userFetch()
},[username] )


return(
<div>
<h1>{dati.login}</h1>
<img src={dati.avatar_url} alt="/"></img>
{err && <h1>{err.message}</h1>}
</div>
)

}