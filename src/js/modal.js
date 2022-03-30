// Modal

const headerBtn = document.querySelector('.header__action-top-btn');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');
const btnLarge = document.querySelector('.btn--large');

const openModal = () => {
  overlay.classList.add('active');
  modal.classList.add('fadeIn');
};

const closeModal = () => {
  overlay.classList.remove('active');
};

const canseledDefaultBehavior = (e) => {
  e.preventDefault;
  closeModal();
};

headerBtn.addEventListener('click', openModal);
btnLarge.addEventListener('click', canseledDefaultBehavior);

close.addEventListener('click', closeModal);
