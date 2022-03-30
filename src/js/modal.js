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

document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape') {
    closeModal();
  }
});

const canseledDefaultBehavior = (e) => {
  e.preventDefault;
  closeModal();
};

overlay.addEventListener('click', (e) => {
  if (e.target === overlay || e.keydown == 'Escape') {
    closeModal();
  }
});

headerBtn.addEventListener('click', openModal);
btnLarge.addEventListener('click', canseledDefaultBehavior);

close.addEventListener('click', closeModal);
