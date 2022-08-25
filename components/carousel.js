import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper";


export default function Carousel({ images }) {
  return (
    <div className="logo-carousel border rounded-md border-white-transparent py-8">
      <Swiper
        slidesPerView={5}
        spaceBetween={64}
        loop={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        speed={10000}
        centeredSlides={true}
        freeMode={true}
        modules={[Autoplay]}
        className="logo-swiper w-full"
      >
      {images.map((image) => (
        <SwiperSlide key={image}>
          <div className='h-10 relative'>
            <Image className='opacity-80' src={`/images/${image}.svg`} alt={image} layout='fill' objectFit='contain' />
          </div>
        </SwiperSlide>
      ))}
      </Swiper>
    </div>
  )
}
