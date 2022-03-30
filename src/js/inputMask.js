import IMask from 'imask';
//Input Mask

const elementMain = document.querySelector('.registration__phone-input');
const element = document.querySelector('.modal__form-phone');

const maskOptions = {
  mask: '(000) 000 00 00',
};

const mask = IMask(element, maskOptions);
const maskMain = IMask(elementMain, maskOptions);
