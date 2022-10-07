import React from 'react';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;