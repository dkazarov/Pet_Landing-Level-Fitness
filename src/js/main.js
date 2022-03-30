import Swiper, { Navigation, Pagination, Keyboard, Autoplay } from 'swiper';

document.addEventListener(
  'DOMContentLoaded',
  function () {
    'use strict';

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
    // Ankor navigation
    const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute('href').substr(1);

        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      });
    }
  },
  false
);
