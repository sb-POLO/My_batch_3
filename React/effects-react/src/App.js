import React, { useState } from 'react'
import MyCounter from './components/MyCounter'

function App() {
  const [flag, setFlag] = useState(true);
  return (
    <>
      {flag && <MyCounter />}
      {/* { flag == true? <MyCounter /> : ""} */}
      <br></br>
      <button onClick={() => setFlag(!flag)}>Hide/Show</button>
    </>
  )
}

export default App