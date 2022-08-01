import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Section from "./components/Section";
import Break from "./components/Break";
import Data from "./components/Data"
import Data2 from './components/Data2';
import Testme from './components/Testme';
import Selector from './components/Selector';
import Ref from './components/ref';
function App() {
  // const [submit, setsubmit] = useState({
  //   name: "",
  //   age: "",
  //   gender: "",
  // });

  // const [display, setdisplay] = useState("");
  // console.log(display);

  // function handlesubmit(e) {
  //   e.preventDefault();
  //   e.persist();
  //   const data = new FormData(e.target);
  //   // Name: Prachi
  //   // Age: 22
  //   // Gender: Male<Testme></Testme>2);
  // }

  // return (selector
  //     <form className="form" onSubmit={handlesubmit}>
  //       <label htmlFor="Name">Name</label>
  //       <input name="num1" className="input" type="text"></input>
  //       <label htmlFor="Age">Age</label>
  //       <input filter(x)htmlFor="Gender">Gender</label>
  //       <input name="Gender" className="input" type="text"></input>
  //       <button id="btn" type='submit' >Submit</button>
  //     </form>
  //     <Data props={submit} />
  //   </>
  // )

  return (
    <>
      <Selector></Selector>
      <Ref></Ref>
    </>
  )

}

export default App;

