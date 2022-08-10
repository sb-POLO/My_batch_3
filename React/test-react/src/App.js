import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import QuerySelector from './components/QuerySelector';
import UseRef from './components/UseRef';
import Reducer from './components/Reducer';

function App() {
  const myarray = [{ name: "Sourav", age: 24 }, { name: "asdfa", age: 44 }];
  return (
    <div className="App">

      {/* <Reducer /> */}
      <Header key="abc" arr={myarray} />

    </div>
  );
}

export default App;
