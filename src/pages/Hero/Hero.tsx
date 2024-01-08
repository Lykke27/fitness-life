import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Hero.scss';

import { type FC, useEffect } from 'react';
import Slider from 'react-slick';

import Text from '../../components/Text/Text';
import { slides } from './sliderContent';

const Hero: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 20000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    draggable: true,
    useCSS: true,
    cssEase: 'cubic-bezier(0.190, 1.000, 0.220, 1.000)',
    useTransform: false,
    speed: 500,
    arrows: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} alt={`Slide ${index}`} />

            <div className="slide__content">
              {slide.text && (
                <Text as="span" color="white" size="xl" fontStyle="italic">
                  {slide.text}
                </Text>
              )}
              {slide.buttonText && <button>{slide.buttonText}</button>}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
