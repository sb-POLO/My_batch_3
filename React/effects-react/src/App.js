import React, { useState } from 'react'
import MyCounter from './components/MyCounter'
import Queryselector from './components/Queryselector';
import UseRef from './components/UseRef';

function App() {
  const [flag, setFlag] = useState(true);
  return (
    // <>
    //   {flag && <MyCounter />}
    //   {/* { flag == true? <MyCounter /> : ""} */}
    //   <br></br>
    //   <button onClick={() => setFlag(!flag)}>Hide/Show</button>
    // </>

    <>
      <UseRef></UseRef>
    </>
  )
}

export default App