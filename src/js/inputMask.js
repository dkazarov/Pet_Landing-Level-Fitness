import IMask from 'imask';
//Input Mask

// const elementMain = document.querySelector('.registration__phone');
const element = document.querySelector('.modal__form-phone');

const maskOptions = {
  mask: '(063) 625 55 44',
};

const mask = IMask(element, maskOptions);
// const maskMain = IMask(elementMain, maskOptions);
