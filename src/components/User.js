import {useParams,Link} from 'react-router-dom'
import React , {useEffect,useState} from 'react'
import axios from 'axios'
function User() {
  const [loading,setLoading ] = useState(true);
  const [user, setUsers] = useState({});
  const{id}=useParams();
useEffect(()=>{
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => setUsers(res.data))
    .finally(()=> setLoading(false));    
},[id])

  return (
    <div>
    <h1>User Detail</h1>
    {loading && <div>Loading...</div>}
    {!loading && <code>{JSON.stringify(user)}</code>}

    <Link to={`/users/${parseInt(id)+1}`}>Next User ({parseInt(id)+1})</Link> 
  </div>
  )
  
}

export default User
