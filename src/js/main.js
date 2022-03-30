('use strict');
import Swiper, { Navigation, Pagination, Keyboard, Autoplay } from 'swiper';
import AOS from 'aos';

//Aos
AOS.init({
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  easing: 'ease',
});

// Swiper
const swiper = new Swiper('.swiper', {
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
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});
