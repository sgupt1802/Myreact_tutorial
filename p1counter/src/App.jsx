import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  const addValue = () => {
    console.log("clicked")
    if (counter >= 20) {
      setCounter(counter)
    } else {
      setCounter(counter + 1)
    }
  }

  const subtract = () => {

    if (counter <= 0) {
      setCounter(counter)
    } else {
      setCounter(counter - 1);
    }
  }

  const reset = () => {

    setCounter(15)
  }

  return (
    <>
      <h1>Counter Project</h1>
      <p>Counter value is {counter}</p>

      <button onClick={addValue}>Add 1</button>
      <p>Counter is {counter}</p>
      <br />
      <button onClick={subtract}>Decrease 1</button>
      <p>Counter is {counter}</p>
      <br />
      <button onClick={reset}>Reset to 15</button>
    </>
  )
}

export default App
