import React, { useReducer, useState } from 'react';
import '../App.css';
import { reducerCounter } from "../reducer/reducerCounter";
import { INCREMENT, DECREMENT } from "../action.type";
import Child1 from './Child1';
import { Mycontext } from "../helper/Mycontext";

function App() {
  // const [counter, dispatch] = useReducer(reducerCounter, 0);
  const [myname, setMyName] = useState("");
  return (
    <div className="App">

      <input value={myname} onChange={(e) => setMyName(e.target.value)}></input>
      <Mycontext.Provider value={{var: myname, var2: setMyName}}>
        <Child1 />
      </Mycontext.Provider>

    </div>
  );
}

export default App;
