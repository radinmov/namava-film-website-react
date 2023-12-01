import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src='https://static.namava.ir/Content/Upload/Images/cc60bacb-4d9f-4d6a-8e21-e3d2dbcdc93e.jpg?anchor=middlecenter&crop=auto&scale=both&w=1920&h=900'/></SwiperSlide>
        <SwiperSlide><img src='https://static.namava.ir/Content/Upload/Images/cc60bacb-4d9f-4d6a-8e21-e3d2dbcdc93e.jpg?anchor=middlecenter&crop=auto&scale=both&w=1920&h=900'/></SwiperSlide>
        <SwiperSlide><img src='https://static.namava.ir/Content/Upload/Images/cc60bacb-4d9f-4d6a-8e21-e3d2dbcdc93e.jpg?anchor=middlecenter&crop=auto&scale=both&w=1920&h=900'/></SwiperSlide>
        <SwiperSlide><img src='https://static.namava.ir/Content/Upload/Images/cc60bacb-4d9f-4d6a-8e21-e3d2dbcdc93e.jpg?anchor=middlecenter&crop=auto&scale=both&w=1920&h=900'/></SwiperSlide>
        <SwiperSlide><img src='https://static.namava.ir/Content/Upload/Images/cc60bacb-4d9f-4d6a-8e21-e3d2dbcdc93e.jpg?anchor=middlecenter&crop=auto&scale=both&w=1920&h=900'/></SwiperSlide>
        <SwiperSlide><img src='https://static.namava.ir/Content/Upload/Images/cc60bacb-4d9f-4d6a-8e21-e3d2dbcdc93e.jpg?anchor=middlecenter&crop=auto&scale=both&w=1920&h=900'/></SwiperSlide>
        <SwiperSlide><img src='https://static.namava.ir/Content/Upload/Images/cc60bacb-4d9f-4d6a-8e21-e3d2dbcdc93e.jpg?anchor=middlecenter&crop=auto&scale=both&w=1920&h=900'/></SwiperSlide>
        <SwiperSlide><img src='https://static.namava.ir/Content/Upload/Images/cc60bacb-4d9f-4d6a-8e21-e3d2dbcdc93e.jpg?anchor=middlecenter&crop=auto&scale=both&w=1920&h=900'/></SwiperSlide>
        <SwiperSlide><img src='https://static.namava.ir/Content/Upload/Images/cc60bacb-4d9f-4d6a-8e21-e3d2dbcdc93e.jpg?anchor=middlecenter&crop=auto&scale=both&w=1920&h=900'/></SwiperSlide>
      </Swiper>
    </>
  );
}
