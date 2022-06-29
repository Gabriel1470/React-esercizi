import useSWR from 'swr'

export default function useFetch(username){
  const fetching=url=>fetch(url).then((resp)=>resp.json());
   const{data,error}= useSWR(`https://api.github.com/users/${username}`,fetching)
    return{data,error, isLoading: !data && !error};

}