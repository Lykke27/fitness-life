import { type FC } from 'react';
import { Button, Slider, Text } from '../../components';
import { slides } from './sliderContent';
import { SwiperSlide } from 'swiper/react';

import './Reviews.scss';

const Reviews: FC = () => {
  return (
    <Slider>
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="slide">
          <img src={slide.image} alt={`Slide ${index}`} />
          <div className="slide__content">
            {slide.text && (
              <Text as="span" color="white" size="xl" fontStyle="italic">
                {slide.text}
              </Text>
            )}
            {slide.buttonText && (
              <Button>
                <Text as="span" color="white" size="s" transform="uppercase">
                  {slide.buttonText}
                </Text>
              </Button>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Slider>
  );
};

export default Reviews;
