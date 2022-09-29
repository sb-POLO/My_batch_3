import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, changeInput } from "./redux/actions/counterActions";
import { add, input1, input2 } from './redux/actions/addActions';
import { useEffect } from 'react';
import axios from "axios";
import { changeApiData } from './redux/actions/apiActions';

const API = "https://api.quotable.io/random";

function App() {
  const data = useSelector(state => state);
  const dispatch = useDispatch();
  // useEffect(() => {
    // (async function () {
    //   try {
    //     const res = await axios.get(API);
    //     console.log(res);
    //     dispatch(changeApiData(res.data.content));
    //   } catch (e) {
    //     dispatch(changeApiData("Something went wrong"))
    //   }
    // })()
  // }, [])
    useEffect(() => {
      (
        async function () {
          await dispatch(changeApiData());
        }
      )();
    }, [])
  return (
    <div className="App">
      <div>COUNTER</div>
      <div>{data.reducer1.counter}</div>
      <input value={data.reducer1.input} onChange={(e) => dispatch(changeInput(e.target.value))}></input>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br />
      <br />
      <br />
      <br />
      <div>ADD</div>
      <input value={data.reducer2.input1} onChange={(e) => dispatch(input1(e.target.value))} />
      <input value={data.reducer2.input2} onChange={(e) => dispatch(input2(e.target.value))} />
      <button onClick={() => dispatch(add())}>+</button>
      <div>{data.reducer2.result}</div>
      <br />
      <br />
      <br />
      <br />
      <div>API</div>
      <div>{data.apiReducer.data}</div>
    </div>
  );
}

export default App;
