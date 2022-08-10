import logo from './logo.svg';
import './App.css';
import Child1 from './components/Child1';
import Child4 from './components/Child4';
import { StoreContext } from './helper/StoreContext'

function App() {
  const name = "Prachi";
  return (
    <div className="App">
      <StoreContext.Provider value={{ name: name, name2: "Sourav", name3: "Sam" }}>
        <Child1 />
      </StoreContext.Provider>
    </div>
  );
}

export default App;
