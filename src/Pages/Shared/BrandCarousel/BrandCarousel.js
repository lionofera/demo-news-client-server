import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../../../Assets/Brand/Img1.jpg';
import Img2 from '../../../Assets/Brand/Img2.jpg';

const BrandCarousel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Img1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Img2}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BrandCarousel;