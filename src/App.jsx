import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[25rem] h-[30rem] flex flex-col justify-center items-center overflow-y-scroll'>
      <div className='w-full h-full'>
        <div className='w-[100%] h-[20%] border border-red-400'></div>
        <div className='w-[100%] h-[20%] border border-red-400'></div>
        <div className='w-[100%] h-[20%] border border-red-400'></div>
        <div className='w-[100%] h-[20%] border border-red-400'></div>
        <div className='w-[100%] h-[20%] border border-red-400'></div>
        <div className='w-[100%] h-[20%] border border-red-400'></div>
        <div className='w-[100%] h-[20%] border border-red-400'></div>
        <div className='w-[100%] h-[20%] border border-red-400'></div>
      </div>
    </div>
  )
}

export default App
