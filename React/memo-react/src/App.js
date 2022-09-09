import logo from './logo.svg';
import './App.css';
import Parent from './components/Parent';
import Child2 from './components/Child2';
import { useState } from 'react';

function App() {
  const [flag, setFlag] = useState(true);
  return (
    <div className="App">
      {/* <Parent /> */}
      <button onClick={() => setFlag(!flag)}>Change</button>
      <Child2 flag={flag} />
    </div>
  );
}

export default App;
