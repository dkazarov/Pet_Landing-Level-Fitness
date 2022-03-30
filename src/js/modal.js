// Modal

const headerBtn = document.querySelector('.header__action-top-btn');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');
const btnLarge = document.querySelector('.btn--large');

const openModal = () => {
  overlay.classList.add('active');
  modal.classList.add('fadeIn');
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  overlay.classList.remove('active');
  document.body.style.overflow = '';
};

const canseledDefaultBehavior = (e) => {
  e.preventDefault;

  closeModal();
};

window.document.addEventListener('click', (e) => {});

headerBtn.addEventListener('click', openModal);
btnLarge.addEventListener('click', canseledDefaultBehavior);

close.addEventListener('click', closeModal);
