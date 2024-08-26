import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Img1 from "../../assets/hero-carousel/img1.jpg"
import Img2 from "../../assets/hero-carousel/img2.jpg"
import Img3 from "../../assets/hero-carousel/img3.jpg"
import Img4 from "../../assets/hero-carousel/img4.jpg"

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center md:gap-14 gap-8'>
        <div className='md:w-1/2 w-full text-center'>
            <h1 className='md:text-5xl text-3xl font-bold md:leading-tight'>"The Wanderer's Quill: Explore, Dream, and Discover Every Story"</h1>
            <p className='py-4'>Embark on a journey through words, where every tale is an adventure waiting to be discovered. Whether you're chasing dreams, uncovering hidden gems, or simply exploring new ideas, our blog is your quill—writing the stories that inspire, captivate, and ignite the wanderer within us all.</p>
        </div>

        <div className='md:w-1/2 w-full mx-auto bg-black'>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
          }}
        pagination={{
          clickable: true,
        }}
       
        modules={[Pagination, Autoplay]}
        className=""
      >
        <SwiperSlide >
            <img src={Img1} alt="" className='w-full lg:h-[420px] sm:h-96 h-80' />
        </SwiperSlide>
        <SwiperSlide >
            <img src={Img2} alt="" className='w-full lg:h-[420px] sm:h-96 h-80' />
        </SwiperSlide>
        <SwiperSlide >
            <img src={Img3} alt="" className='w-full lg:h-[420px] sm:h-96 h-80' />
        </SwiperSlide>
        <SwiperSlide >
            <img src={Img4} alt="" className='w-full lg:h-[420px] sm:h-96 h-80' />
        </SwiperSlide>
      </Swiper>
        </div>
    </div>
  )
}

export default Hero