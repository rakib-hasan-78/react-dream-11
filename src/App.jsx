import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Assemble Your Ultimate Dream 11 Cricket Team</h1> <br />
      <h2>subscribe to our newsletters</h2> <br />
      <h3>available players : </h3> <br />
      <h4>virat koheli</h4> <br />
      <h5>rating</h5> <br />
      <span>left hand bat</span> <br />
      <span className='country'>xindia</span> <br />
      <p>extent</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className='text-2xl text-purple-500'>
          Edit  <code>src/App.jsx</code> and save to <small>fantastic bro !!!</small> test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className='btn-div'>
        <button className='btn'>claim free credit</button>
      </div>
    </>
  )
}

export default App


