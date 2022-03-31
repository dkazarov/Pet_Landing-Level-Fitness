'use strict';

const burgerBtn = document.querySelector('.burger');
const headerAction = document.querySelector('.header__action');

burgerBtn.addEventListener('click', () => {
  headerAction.classList.toggle('active');
});
