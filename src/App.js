import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'; 

import React, { useEffect } from 'react';
import Dashboard from './pages';
import Navbar from './components/base/Navbar';
import Footer from './components/base/Footer';

import AOS from 'aos'
import 'aos/dist/aos.css';

function App() {
  useEffect(()=>{
    AOS.init();
  },[])
 return(
  <BrowserRouter>
    <Navbar>

    </Navbar>
    <div className='h-16 md:h-20'>
      
    </div>
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
    </Routes>
    <Footer>

    </Footer>
  </BrowserRouter>
 )
}

export default App;
