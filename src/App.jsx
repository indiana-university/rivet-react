import React, { useState } from 'react'
import './App.css'
import {Alert} from "./components/Alert"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Alert variant={"danger"}>Some alerts don't need a title. This is one of them.</Alert>
        <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
        </button>
    </div>
  )
}

export default App
