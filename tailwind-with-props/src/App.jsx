import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
    <h1 className='bg-red-200 text-black'>Tailwind Test</h1>
    <Card location="Paris" imgLink="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"/>
    <Card location="Russia" imgLink="https://www.tripsavvy.com/thmb/fhTmGZj0fLQU-5pGfedI4Qno1js=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/st-basil-s-cathedral--in-red-square--moscow--russia-860736748-5c71bbddc9e77c000107b5d1.jpg"/>
    </>
  )
}

export default App
