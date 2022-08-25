

import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper";

export default function USP() {
  return (
    <div className="usp-carousel bg-main-purple text-center h-[40px] flex justify-center items-center">
      <Swiper
        slidesPerView={"auto"}
        loop={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        speed={20000}
        centeredSlides={true}
        freeMode={true}
        modules={[Autoplay]}
        className="usp-swiper w-full"
      >
        <SwiperSlide>
          <Link href="/news">
            <a className='uppercase text-xs tracking-[.15rem] font-roobert'>
              <b>Latest News</b> Hubble announces it’s latest announcement <Image src="/icons/arrow.svg" alt="arrow" width="12" height="12" />
            </a>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
