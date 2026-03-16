import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import styles from "./Carousel.module.css";

const Carousel = ({ data, renderComponent }) => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={6}
      breakpoints={{
        320: { slidesPerView: 2 },
        640: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
        1280: { slidesPerView: 6 }
      }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          {renderComponent(item)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;