import React from 'react';
import { Carousel } from 'react-bootstrap';
// Asegúrate de importar los estilos específicos

const CustomCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="path_to_your_smart_watch_banner.jpg" // Sustituye esto por la ruta a tu imagen
          alt="Smart Watches"
          style={{ height: '100vh' }} // Asegura que la imagen cubra todo el alto de la pantalla
        />
        <Carousel.Caption className="custom-caption">
          <h3>Best Deal Online on smart watches</h3>
          <p>SMART WEARABLE. UP to 80% OFF</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Agrega más items si es necesario */}
    </Carousel>
  );
}

export default CustomCarousel;
