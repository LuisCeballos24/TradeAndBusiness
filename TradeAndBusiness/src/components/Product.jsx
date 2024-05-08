import React from 'react';

const Product = ({ image, title, description, link }) => {
  return (
    <div className="product">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => window.location.href = link}>Shop Now</button>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => window.location.href = link}>Shop Now</button>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => window.location.href = link}>Shop Now</button>
    </div>
  );
};

export default Product;
