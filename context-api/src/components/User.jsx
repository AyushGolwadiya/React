import { useContext } from 'react'
import UserDetails from './UserDetails'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/Context'


const User = () => {

  const {users} = useContext(UserContext);
  
  return (
    <div>
      <h1 className='text-2xl'>User List</h1>
      <div className='flex flex-col mt-5 w-1/3 gap-5'>
        {users.map((e)=> (<Link key={e.id} className='bg-blue-300 p-3' to={`/user/${e.id}`}>{e.username}</Link>))}
      </div>
    </div>
  )
}

export default User