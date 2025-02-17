import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { swiperSettings } from "@/config/swiperConfig";
import { ChevronRightIcon } from "./icons/ChevronRightIcon";
import { ChevronLeftIcon } from "./icons/ChevronLeftIcon";

import "swiper/css";

export default function ProvinceCarousel() {
  return (
    <div className="relative">
      <PrevButton />
      <Swiper {...swiperSettings} className="relative w-full h-[254px]">
        <SwiperSlide className="border rounded-2xl px-6 py-5">
          Slide 1
        </SwiperSlide>
        <SwiperSlide className="border rounded-2xl px-6 py-5">
          Slide 2
        </SwiperSlide>
        <SwiperSlide className="border rounded-2xl px-6 py-5">
          Slide 3
        </SwiperSlide>
        <SwiperSlide className="border rounded-2xl px-6 py-5">
          Slide 4
        </SwiperSlide>
        <SwiperSlide className="border rounded-2xl px-6 py-5">
          Slide 5
        </SwiperSlide>
        <SwiperSlide className="border rounded-2xl px-6 py-5">
          Slide 6
        </SwiperSlide>
      </Swiper>
      <NextButton />
    </div>
  );
}

function NextButton() {
  return (
    <button className="swiper-button-next bg-gray-200 absolute inset-y-0 my-auto right-3 md:-right-4 z-50 border w-8 h-8 flex items-center justify-center rounded-full">
      <ChevronRightIcon className="size-5" />
    </button>
  );
}
function PrevButton() {
  return (
    <button className="swiper-button-prev bg-gray-200 absolute mr-0 inset-y-0 my-auto left-3 md:-left-4 z-10 border w-8 h-8 flex items-center justify-center rounded-full">
      <ChevronLeftIcon className="size-5" />
    </button>
  );
}
