import {useContext} from 'react'
import Home from './components/Home'
import { NavLink, Route, Routes } from 'react-router-dom'
import User from './components/User'
import About from './components/About'
import UserDetails from './components/UserDetails'

const App = () => {
  return (
    <div className='px-50'>
      <nav className='my-10 flex justify-center gap-10'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/user'}>User</NavLink>
        <NavLink to={'/about'}>About</NavLink>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/user' element={<User/>}/>
        <Route path='/user/:id' element={<UserDetails/>}/>
        <Route path='/about' element={<About/>}></Route>
      </Routes>

    </div>
  )
}

export default App