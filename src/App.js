import React from 'react';
import './App.module.css';
import { NavBar, HomeIndex, Products, ProductsIndex, ProductDetails, Footer, About } from './components/components';
import { Routes, Route } from 'react-router-dom';
import shoesData from './assets/data';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeIndex shoesData={shoesData} />}/>
        <Route path=":category" element={<Products />}>
          <Route path="/" element={<ProductsIndex shoesData={shoesData} />} />
          <Route path=":productId" element={<ProductDetails shoesData={shoesData} />} />
        </Route>
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
