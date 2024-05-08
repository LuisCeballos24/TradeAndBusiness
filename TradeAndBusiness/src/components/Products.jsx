import React from 'react';
import Product from './Product';

const Products = () => {
  return (
    <section className="products">
      <Product
        image="https://cdn.pixabay.com/photo/2022/02/17/12/37/smart-watch-6909861_1280.jpg"
        title="SMART WEARABLE"
        description="Up to 80% OFF"
        link="#"
      />
      <Product
        image="https://cdn.pixabay.com/photo/2022/02/17/12/35/smartphone-6909855_1280.jpg"
        title="Grab the best deal on Smart phon"
        description="Up to 80% OFF"
        link="#"
      />
      <Product
        image="https://cdn.pixabay.com/photo/2022/02/17/12/39/headphones-6909871_1280.jpg"
        title="Daily Essentials"
        description="Up to 50% OFF"
        link="#"
      />
    </section>
  );
};

export default Products;
