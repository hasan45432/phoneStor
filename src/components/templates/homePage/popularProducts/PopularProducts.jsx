"use client";
import React from "react";
import Product from "@/components/Modules/product/Product";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

export default function PopularProducts() {
  return (
    <div className="mb-[20px]">
      <div className="w-full h-[600px] p-[90px] bg-[#FFFFFF] rounded-[10px] flex items-center relative">
        <Swiper
          navigation={false}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 2000 }}
          loop={true}
          rewind={true}
          slidesPerView={5}
          className="h-[400px] w-[1120px] text-center"
        >
          <SwiperSlide>
            <Product />
          </SwiperSlide>
          <SwiperSlide>
            <Product />
          </SwiperSlide>

          <SwiperSlide>
            <Product />
          </SwiperSlide>

          <SwiperSlide>
            <Product />
          </SwiperSlide>

          <SwiperSlide>
            <Product />
          </SwiperSlide>
          <SwiperSlide>
            <Product />
          </SwiperSlide>
        </Swiper>
        <div className="text-left mt-[10px]  absolute bottom-[60px] left-[580px]">
          <button className="w-[150px] h-[40px] rounded-[6px] bg-green-50 text-[#1ABA1A] text-[18px]">
            تمامی محصولات
          </button>
        </div>
      </div>
    </div>
  );
}
