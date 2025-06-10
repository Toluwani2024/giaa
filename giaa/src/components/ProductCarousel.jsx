import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductCarousel.css';

// Import images manually
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';

const images = [img1, img2, img3, img4];

const ProductCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <section className="carousel-section">
      <h2>Featured Looks</h2>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img src={src} alt={'fashion-${index}'} className="carousel-img" />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ProductCarousel;