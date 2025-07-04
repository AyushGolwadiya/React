import React from 'react'

const Login = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center text-black bg-[#8989f5aa]'>
      <div className='border-3 px-15 py-10 rounded-xl border-blue-100 backdrop-blur-2xl'>
        <h1 className='text-2xl font-bold text-center mb-5'>Login</h1>
        <div>
          <form className='flex flex-col gap-4'>
            <input 
              className='bg-[#dadada] px-4 rounded-sm py-1 border border-blue-100 focus:border-blue-300 outline-none' 
              type="email" 
              placeholder='Email' 
            />
            <input 
              className='bg-[#dadada] px-4 rounded-sm py-1 border border-blue-100 focus:border-blue-300 outline-none' 
              type="password" 
              placeholder='Password' 
            />
            <button 
              className='bg-[#000931] text-white font-medium py-1 rounded-full mt-3'>
              Login
            </button>
          </form> 
        </div>
      </div>
    </div>
  )
}

export default Login
