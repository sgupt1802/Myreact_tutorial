import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")
  const [isCopyClicked, setIsCopyClicked] = useState(false);
  const passwordRef = useRef(null)

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 70)
    window.navigator.clipboard.writeText(password)
    setIsCopyClicked(true);

    // Reset the state after a short delay
    setTimeout(() => {
      setIsCopyClicked(false);
    }, 1000);


  }, [password])


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllow) str += "0123456789"
    if (charAllow) str += "!@#$&()*+,-./:{}[]^|~"

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllow, charAllow, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllow, charAllow, passwordGenerator])


  return (

    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-center text-white my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3 '
          placeholder='password'
          readOnly
          ref={passwordRef}
        />

        <button
          onClick={copyToClipboard}
          className={`ripple-btn outline-none bg-green-700 text-white px-3 py-0.5 shrink-0`}
        >
          {isCopyClicked ? 'Copied!' : 'Copy'}
        </button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={8}
            max={35}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label>Length:({length})</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={numberAllow}
            id='numberInput'
            onChange={(e) => {
              setNumberAllow((prev) => !prev)
            }}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>


        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={numberAllow}
            id='charInput'
            onChange={(e) => {
              setCharAllow((prev) => !prev)
            }}
          />
          <label htmlFor='charInput'>Spl. Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
