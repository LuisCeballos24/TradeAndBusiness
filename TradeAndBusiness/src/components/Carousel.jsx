import React from 'react';
import { Carousel } from 'react-bootstrap';

const CustomCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="path_to_your_smart_watch_banner.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Best Deal Online on smart watches</h3>
                    <p>SMART WEARABLE. UP to 80% OFF</p>
                </Carousel.Caption>
            </Carousel.Item>
            {/* Agrega más Carousel.Item aquí si es necesario */}
        </Carousel>
    );
}

export default CustomCarousel;