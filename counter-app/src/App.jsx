import './app.css'
import { useState } from 'react';

function App(){
  let [counter , setCounter] = useState(0)

  const addValue = () =>{
    counter = counter + 1 ;
    setCounter(counter);

  }

  const decValue = () => {
    counter = counter - 1;
    setCounter(counter);
  }

  return (
    <>
    <h1>Counter App</h1>
    <h2>Counter : {counter}</h2>

    <button  onClick={addValue}>Increase</button>
    <button onClick={decValue}>Decrease</button>
    </>
  )
}

export default App;