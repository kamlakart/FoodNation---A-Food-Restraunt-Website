import React from 'react';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ScrollToTop from './components/common/ScrollToTop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route path='*' element={<Home />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default App;