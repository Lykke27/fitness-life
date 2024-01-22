import { type FC } from 'react';
import { SwiperSlide } from 'swiper/react';
import { Slider, Text } from '../../components';
import { slides } from './sliderContent';
import './Hero.scss';

const Hero: FC = () => {
  return (
    <div className="hero" id="hero">
      <Slider>
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="slide">
            <img src={slide.image} alt={`Slide ${index}`} />
            <div className="slide__overlay"></div>
            <div className="slide__content">
              {/* {slide.text && (
                <Text as="span" color="white" size="xl" fontStyle="italic">
                  {slide.text}
                </Text>
              )} */}
            </div>
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
