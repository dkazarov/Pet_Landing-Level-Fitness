// Modal

const headerBtn = document.querySelector('.header__action-top-btn');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');

// Open modal
const openModal = () => {
  overlay.classList.add('active');
  modal.classList.add('fadeIn');
  document.body.style.overflow = 'hidden';
  clearInterval(modalTimer);
};

// Close Modal
const closeModal = () => {
  overlay.classList.remove('active');
  document.body.style.overflow = '';
};

// Listener on key ESCAPE
document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape' && overlay.classList.contains('active')) {
    closeModal();
  }
});

//examination click
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    closeModal();
  }
});

// Show modal on Scroll
const showModalByScroll = () => {
  if (
    window.pageYOffset + document.documentElement.clientHeight >=
    document.documentElement.scrollHeight - 1
  ) {
    openModal();
    window.removeEventListener('scroll', showModalByScroll);
  }
};

// Open modal by time
const modalTimer = setTimeout(openModal, 120000);

window.addEventListener('scroll', showModalByScroll);
headerBtn.addEventListener('click', openModal);
close.addEventListener('click', closeModal);
