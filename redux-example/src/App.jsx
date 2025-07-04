import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Users from './components/Users';
import Products from './components/Products';

const App = () => {
  return (
    <div className='w-screen h-screen'>
      <nav className='py-3 text-xl text-zinc-700 flex justify-center gap-10 border-b border-zinc-300'>
        <Link to={'/'}>Home</Link>
        <Link to={'/users'}>Users</Link>
        <Link to={'/products'}>Products</Link>
      </nav>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </div>
  )
}

export default App