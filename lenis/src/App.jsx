import React from 'react'
import Lenis from 'lenis'

const App = () => {
  const lenis = new Lenis({
    infinite:true,
  });

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
  return (
    <div className='w-full'>
      <div className="h-screen w-full bg-zinc-800 text-9xl text-white">ab</div>
      <div className="h-screen w-full bg-zinc-500 text-9xl text-white">cd</div>
      <div className="h-screen w-full bg-zinc-700 text-9xl text-white">ef</div>
      <div className="h-screen w-full bg-zinc-800 text-9xl text-white">ab</div>
    </div>
  )
}

export default App