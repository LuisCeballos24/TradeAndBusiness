import React from 'react';

const categories = [
  { name: "Mobile", icon: "/mobile.webp" },
  { name: "Cosmetics", icon: "/cosmetics.webp" },
  { name: "Furniture", icon: "/furniture.webp" },
  // Agrega más categorías según sea necesario
];

const CategorySection = () => (
  <div className="category-section">
    <h2>Shop From Top Categories</h2>
    <div className="d-flex flex-wrap justify-content-around">
      {categories.map(category => (
        <div key={category.name} className="text-center p-2">
          <img src={category.icon} alt={category.name} style={{ width: '60px', height: '60px' }} />
          <p>{category.name}</p>
        </div>
      ))}
    </div>
  </div>
);

export default CategorySection;
