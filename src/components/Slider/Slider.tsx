import { type FC } from 'react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/react';

import 'swiper/css/autoplay';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './Slider.scss';

const Slider: FC = ({ children }) => {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect={'fade'}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default Slider;
