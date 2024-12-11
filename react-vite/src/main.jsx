import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Chai from './chai'


const reactElement = React.createElement(
  'a',
  {
    href:"https://youtube.com",
    target:"_blank"
  },
  'Click Me to visit You-Tube'
)

createRoot(document.getElementById('root')).render(
  <App/>
)
