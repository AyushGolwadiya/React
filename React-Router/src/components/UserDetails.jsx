import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserDetails = () => {
    const data = useParams();
    const navigate = useNavigate()

    const GoBackHandler = () =>{
        navigate("/user");
        // navigate(-1)
    }
  return (
    <div className='py-10'>
        <h1 className='text-3xl'>User Details</h1>

        <h1 className='text-xl mt-5'>Hey !! , {data.name.charAt(0).toUpperCase() + data.name.slice(1)} how are you ?</h1>

        <button onClick={GoBackHandler} className="w-60 mt-5 bg-zinc-200 px-10 py-3 rounded-sm text-zinc-800">Back</button>
    </div>
  )
}

export default UserDetails