import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../context/Context';


const UserDetails = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const { users } = useContext(UserContext);

  const goback = () =>{
    navigate(-1);
  }
  return (
    <>
    <div>
      <div>
        <h1 className='text-2xl font-bold'>Name : {users[id].username}</h1>
        <h3>email : {users[id].email}</h3>
        <h3>city  : {users[id].city}</h3>
      </div>
    </div>
    <button className='bg-blue-300 px-4 py-2 mt-5 rounded-sm' onClick={goback}>Go Back</button>
    </>
  )
}

export default UserDetails