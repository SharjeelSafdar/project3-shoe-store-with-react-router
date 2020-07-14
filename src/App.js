import React from 'react';
import './App.module.css';
import { NavBar, HomeIndex, Products, ProductsIndex, ProductDetails, 
  Footer, About, PageNotFound } from './components/components';
import { Routes, Route } from 'react-router-dom';
import shoesData from './assets/data';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeIndex shoesData={shoesData} />}/>
        <Route path="/men" element={<Products category="men" />}>
          <Route path="/" element={<ProductsIndex shoesData={shoesData} category="men" />} />
          <Route path=":productId" element={<ProductDetails shoesData={shoesData} category="men" />} />
        </Route>
        <Route path="/women" element={<Products category="women" />}>
          <Route path="/" element={<ProductsIndex shoesData={shoesData} category="women" />} />
          <Route path=":productId" element={<ProductDetails shoesData={shoesData} category="women" />} />
        </Route>
        <Route path="/kids" element={<Products category="kids" />}>
          <Route path="/" element={<ProductsIndex shoesData={shoesData} category="kids" />} />
          <Route path=":productId" element={<ProductDetails shoesData={shoesData} category="kids" />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
