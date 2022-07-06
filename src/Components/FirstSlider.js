import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import Slide1 from '../Images/slide1.png'
import Slide2 from '../Images/sider2.png'
import Slide3 from '../Images/slide3.png'
import Slide4 from '../Images/slide4.png'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './FirstSlider.css'
// import required modules
import { Navigation } from 'swiper'

export default function FirstSlider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src={Slide1} alt="slide image here" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide2} alt="slide image here" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide3} alt="slide image here" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide4} alt="slide image here" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide1} alt="slide image here" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide2} alt="slide image here" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide3} alt="slide image here" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
