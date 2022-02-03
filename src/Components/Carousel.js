import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
// import "antd/dist/antd.css";
import "swiper/css";
import "swiper/css/navigation";
import menImages from "../assets/Images/carousel-image.png";
const Carousel = () => {
  // SwiperCore.use([Autoplay]);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      modules={[Navigation, Autoplay]}
    >
      <SwiperSlide>
        <img width="100%" src={menImages} />
      </SwiperSlide>
      <SwiperSlide>
        <img width="100%" src={menImages} />
      </SwiperSlide>
      <SwiperSlide>
        <img width="100%" src={menImages} />
      </SwiperSlide>
      <SwiperSlide>
        <img width="100%" src={menImages} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
