import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  const data=[1,2,3,4]

  return (
    <>
      <h1 className=' mb-7 bg-green-400 text-blue-600 px-5 rounded-xl overline  '>Tailwind test</h1>
      <Card name="reactify" btnText="touch me" />
      <Card name="samarth" />
    </>
  )
}

export default App
