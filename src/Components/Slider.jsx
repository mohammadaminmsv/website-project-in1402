import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <div className="container justify-center flex flex-row space-x-4 ">
      <div className="w-[600pt] md:w-[500px] lg:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="samsung_tablet.jpg" alt="banner tablet samsung" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="s23ultra-banner.jpg" alt="banner s23 ultra samsung" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="series13.jpg" alt="banner tablet samsung" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="iphone-n.jpg" alt="banner iphone apple" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="shop-ir.jpg" alt="banner alert" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
