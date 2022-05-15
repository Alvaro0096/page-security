import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contactus from './pages/Contactus';
import About from './pages/About';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/contactus' element={<Contactus />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;