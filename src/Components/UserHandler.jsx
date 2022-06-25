import { useParams } from "react-router-dom";
import { GithubUser } from "./GhithubUser";




export default function UserHandler() {
    const { username } = useParams()
    return (
        <>
            {console.log(username)}
            <GithubUser name={username} />
        </>
    )
}