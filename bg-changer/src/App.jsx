import { useState } from 'react'


function App() {
  const [color, setColor] = useState('olive')

  return (
    <div className=' w-full h-screen duration-200 bg-red-200'
    style={{backgroundColor:color}}>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 text-white'>
         <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-4 py-3 rounded-lg'>
          <button className='outline-none rounded-md px-4 py-2' onClick={() => setColor("red")} style={{backgroundColor:"red"}}>Red</button>
          <button className='outline-none rounded-md px-4 py-2' onClick={() => setColor("yellow")} style={{backgroundColor:"yellow"}}>Yellow</button>
          <button className='outline-none rounded-md px-4 py-2' onClick={() => setColor("black")} style={{backgroundColor:"black"}}>Black</button>
          <button className='outline-none rounded-md px-4 py-2' onClick={() => setColor("purple")} style={{backgroundColor:"purple"}}>Purple</button>
          <button className='outline-none rounded-md px-4 py-2' onClick={() => setColor("green")} style={{backgroundColor:"green"}}>Green</button>
          <button className='outline-none rounded-md px-4 py-2' onClick={() => setColor("blue")} style={{backgroundColor:"blue"}}>Blue</button>
          <button className='outline-none rounded-md px-4 py-2' onClick={() => setColor("pink")} style={{backgroundColor:"pink"}}>Pink</button>
         </div>

      </div>
      
    </div>
  )
}

export default App
