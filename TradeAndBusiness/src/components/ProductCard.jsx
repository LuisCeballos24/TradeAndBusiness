import React from 'react';
import { Card } from 'react-bootstrap';

const ProductCard = ({ title, imageUrl, price, originalPrice }) => (
  <Card style={{ width: '18rem' }} className="mb-4">
    <Card.Img variant="top" src={imageUrl} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {price} <s>{originalPrice}</s>
      </Card.Text>
    </Card.Body>
  </Card>
);

export default ProductCard;
