import About from './components/About';
import Home from './components/Home';
import Nav from './components/Nav';
import User from './components/User';
import './index.css'
import { Link, Route, Routes } from 'react-router-dom';
import Routing from './utils/Routing';

function App() {
  
  return (
    <>
      <Nav />
      <Routing />
    </>
  )
}

export default App
