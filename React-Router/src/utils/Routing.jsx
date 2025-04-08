import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'

const Routing = () => {
  return (
    <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path={'/user'} element={<User/>}/>
        <Route path={'/about'} element={<About/>}/>

    </Routes>
  )
}

export default Routing