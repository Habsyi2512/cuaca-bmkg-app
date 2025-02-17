import { SwiperOptions } from "swiper/types";
import { Navigation, A11y, Autoplay } from "swiper/modules";

export const swiperSettings: SwiperOptions = {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slidesPerView: 5,
  spaceBetween: 32,
  modules: [Navigation, Autoplay, A11y],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};
