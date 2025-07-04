import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount ,incrementAsync } from './store/reducers/counterSlice';

const App = () => {
  const reduc = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  console.log(reduc)
  return (
    <div className='w-full h-screen flex items-center justify-center text-black'>
      <div className='flex flex-col items-center'>
        <h1 className='text-7xl'>Counter : {reduc}</h1>
        <div className='flex mt-5 gap-5'>
          <button onClick={() => dispatch(increment()) } className='px-3 py-1 bg-zinc-300 rounded-sm cursor-pointer'>Increment</button>
          <button onClick={() => dispatch(decrement())} className='px-3 py-1 bg-zinc-300 rounded-sm cursor-pointer'>Decrement</button>
          <button onClick={() => dispatch(incrementAsync(5))} className='px-3 py-1 bg-zinc-300 rounded-sm cursor-pointer'>Increment By 5</button>
        </div>
      </div>
    </div>
  )
}

export default App  