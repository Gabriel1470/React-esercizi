import { useEffect , useState } from "react";

export function GithubUser({username}){

const [dati,setDati] = useState('username')
const [err,setErr] = useState(false)

async function userFetch() {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
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
},[])


return(
<div>
<h1>{dati.login}</h1>
<img src={dati.avatar_url} alt="/"></img>
{err && <h1>{err.message}</h1>}
</div>
)

}