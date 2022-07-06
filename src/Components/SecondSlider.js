// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './SecondSlider.css'

// import required modules
import { Pagination, Navigation } from 'swiper'

import img1 from '../Images/img1.png'
import img2 from '../Images/img2.png'
import img3 from '../Images/img3.png'
import img4 from '../Images/img4.png'
import img6 from '../Images/img6.png'
import img7 from '../Images/img7.png'
import img8 from '../Images/img8.png'
import img9 from '../Images/img9.png'
import img10 from '../Images/img10.png'
export default function SecondSlider() {
  return (
    <>
      <Swiper
        slidesPerView={10}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          '@1.50': {
            slidesPerView: 10,
            spaceBetween: 0,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="text-center">
            <img className="secondslider-img" src={img1} alt="sliderimg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center">
            <img className="secondslider-img" src={img2} alt="sliderimg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center">
            <img className="secondslider-img" src={img3} alt="sliderimg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center">
            <img className="secondslider-img" src={img4} alt="sliderimg" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="text-center">
            <img className="secondslider-img" src={img6} alt="sliderimg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center">
            <img className="secondslider-img" src={img7} alt="sliderimg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center">
            <img className="secondslider-img" src={img7} alt="sliderimg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center">
            <img className="secondslider-img" src={img4} alt="sliderimg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center">
            <img className="secondslider-img" src={img3} alt="sliderimg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center">
            <img className="secondslider-img" src={img10} alt="sliderimg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center">
            <img className="secondslider-img" src={img8} alt="sliderimg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center">
            <img className="secondslider-img" src={img9} alt="sliderimg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center">
            <img className="secondslider-img" src={img7} alt="sliderimg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center">
            <img className="secondslider-img" src={img4} alt="sliderimg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center">
            <img className="secondslider-img" src={img3} alt="sliderimg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center">
            <img className="secondslider-img" src={img10} alt="sliderimg" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
