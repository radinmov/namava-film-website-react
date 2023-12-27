import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./test.css"

// import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="one">
            
        </SwiperSlide>
        <SwiperSlide className="two"></SwiperSlide>
        <SwiperSlide className="three">Slide 3</SwiperSlide>
        <SwiperSlide className="four">Slide 4</SwiperSlide>
        <SwiperSlide className="five">Slide 5</SwiperSlide>
        <SwiperSlide className="seven">Slide 6</SwiperSlide>
        <SwiperSlide className="eight">Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
