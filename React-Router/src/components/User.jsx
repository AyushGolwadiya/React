import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const User = () => {
  return (
    <div className="w-1/2 mx-20 my-15">
    <h1 className="text-3xl">User</h1>
    <p className="text-justify mt-5">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
      itaque recusandae dolore tempora tempore assumenda nisi distinctio illo
      aut officiis, dicta corrupti beatae inventore magnam consectetur harum
      suscipit ut fugit.
    </p>
    <button className="w-60 mt-5 bg-zinc-200 px-10 py-3 rounded-sm text-zinc-800">Profile</button>

    <div className='flex flex-col mt-5 text-md'>
      <h1 className='text-3xl my-3'>Users</h1>
      <Link to={"/user/john"} className='bg-zinc-400 hover:scale-101 hover:bg-zinc-100 text-white hover:text-black px-3 py-2 my-1 w-1/2'>John</Link>
      <Link to={"/user/ayush"} className='bg-zinc-400 hover:scale-101 hover:bg-zinc-100 text-white hover:text-black px-3 py-2 my-1 w-1/2'>Ayush</Link>
      <Link to={"/user/anubhav"} className='bg-zinc-400 hover:scale-101 hover:bg-zinc-100 text-white hover:text-black px-3 py-2 my-1 w-1/2'>Anubhav</Link>
    </div>
    <hr className='mt-5'/>
    <Outlet />
  </div>
  )
}

export default User