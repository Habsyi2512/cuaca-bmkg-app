import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";

import "swiper/css";
import { ChevronRightIcon } from "./icons/ChevronRightIcon";
import { ChevronLeftIcon } from "./icons/ChevronLeftIcon";

export default function ProvinceCarousel() {
  return (
    <>
      <Swiper
        loop={true}
        modules={[Navigation, A11y]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="border"
      >
        <PrevButton />
        <SwiperSlide className="w-[250px] h-[100px] border">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="w-[250px] h-[100px] border">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="w-[250px] h-[100px] border">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="w-[250px] h-[100px] border">
          Slide 4
        </SwiperSlide>
        <SwiperSlide className="w-[250px] h-[100px] border">
          Slide 5
        </SwiperSlide>
        <SwiperSlide className="w-[250px] h-[100px] border">
          Slide 6
        </SwiperSlide>
        <NextButton />
      </Swiper>
    </>
  );
}

function NextButton() {
  return (
    <button className="swiper-button-next absolute top-0 right-0 z-10">
      <ChevronRightIcon className="size-5" />
    </button>
  );
}
function PrevButton() {
  return (
    <button className="swiper-button-prev absolute top-0 left-0 z-10">
      <ChevronLeftIcon className="size-5" />
    </button>
  );
}
