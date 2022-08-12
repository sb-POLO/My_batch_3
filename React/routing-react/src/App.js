import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import About from './components/About';
import { Link, Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound';

function App() {
  const [page, setPage] = useState("Home");
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contactus">Contact us</Link>
          </li>
        </ul>
      </nav>
      {/* {page === "Home" ? <Home /> : page === "About" ? <About /> : <ContactUs />} */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
