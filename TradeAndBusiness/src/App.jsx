import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Carousel />
      <ProductSection />
      <Footer />
    </div>
  );
}

export default App;
