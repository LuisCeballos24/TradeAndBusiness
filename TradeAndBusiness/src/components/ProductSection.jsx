import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { title: "Galaxy S22 Ultra", imageUrl: "/galaxy-s22-ultra.webp", price: "₹32999", originalPrice: "₹74999" },
  { title: "Galaxy M13 (4GB | 64 GB)", imageUrl: "/galaxy-m13.webp", price: "₹10499", originalPrice: "₹14499" },
  { title: "Galaxy M33 (4GB | 64 GB)", imageUrl: "/galaxy-m33.webp", price: "₹16199", originalPrice: "₹24499" },
  { title: "Galaxy M53 (4GB | 64 GB)", imageUrl: "/galaxy-m53.webp", price: "₹31999", originalPrice: "₹40999" },
  { title: "Galaxy S22 Ultra", imageUrl: "/galaxy-s22-ultra2.webp", price: "₹67999", originalPrice: "₹86999" }
];

const ProductSection = () => (
  <div className="product-section">
    <h2>Grab the best deal on Smartphones</h2>
    <div className="d-flex flex-wrap justify-content-around">
      {products.map(product => (
        <ProductCard key={product.title} title={product.title} imageUrl={product.imageUrl} price={product.price} originalPrice={product.originalPrice} />
      ))}
    </div>
  </div>
);

export default ProductSection;
