import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./test.css";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="one public"></SwiperSlide>
        <SwiperSlide className="two public"></SwiperSlide>
        <SwiperSlide className="three public"> </SwiperSlide>
        <SwiperSlide className="four public"> </SwiperSlide>
      </Swiper>
    </>
  );
}
