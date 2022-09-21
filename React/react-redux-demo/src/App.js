import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, changeInput } from "./redux/actions/counterActions";

function App() {
  const data = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>{data.reducer1.counter}</div>
      <input value={data.reducer1.input} onChange={(e) => dispatch(changeInput(e.target.value))}></input>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
