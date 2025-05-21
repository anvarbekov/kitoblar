"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        autoplay={{ delay: 10 }} 
        loop={true}

        spaceBetween={30}
        centeredSlides={true}
      >
        <div className='rounded'>
        <SwiperSlide>
            <img src="/images/banner1.jpg" alt="" />
        </SwiperSlide>  
        </div>
        <div className='rounded'>
        <SwiperSlide>
            <img src="/images/banner2.jpg" alt="" />
        </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}
