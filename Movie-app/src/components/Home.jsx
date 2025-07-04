import React from 'react'
import Sidenav from './templates/SideNav'
import Topnav from './templates/Topnav'

const Home = () => {
    document.title = "Movie-App | Homepage"
  return (
    <>
    <Sidenav />
    <div className='main w-[80%] h-full'>
      <Topnav />
    </div>
    </>
  )
}

export default Home