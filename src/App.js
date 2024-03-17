import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'; 

import React, { useEffect } from 'react';
import Dashboard from './pages';
import Navbar from './components/base/Navbar';
import Footer from './components/base/Footer';

import AOS from 'aos'
import 'aos/dist/aos.css';
import About from './pages/about';
import Wheels from './pages/wheels';
import WheelDetails from './pages/wheels/details';

function App() {
  useEffect(()=>{
    AOS.init();
  },[])
 return(
  <BrowserRouter>
    <Navbar>

    </Navbar>
    <div className='h-16 xl:h-20'>
      
    </div>
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/wheels" element={<Wheels />}></Route>
      <Route path="/wheels/:id" element={<WheelDetails />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
    <Footer>

    </Footer>
  </BrowserRouter>
 )
}

export default App;
