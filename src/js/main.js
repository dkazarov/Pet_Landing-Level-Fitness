"use strict";

import Swiper, { Navigation, Pagination, Keyboard, Autoplay} from "swiper";

const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination, Keyboard, Autoplay],

  autoplay: {
    delay: 5000,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  speed: 400,
  spaceBetween: 100,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});
