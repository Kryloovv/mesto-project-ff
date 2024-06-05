export const openModal = (popup) => {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', handleEscapeKeydown);
};

export const closeModal = (popup) => {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', handleEscapeKeydown);
};

export const handleOverlayClick = (evt) => {
  if (evt.target == evt.currentTarget) {
    closeModal(evt.currentTarget);
  }
};

export const handleEscapeKeydown = (evt) => {
  if (evt.key == 'Escape') {
    const activePopup = document.querySelector('.popup_is-opened');
    closeModal(activePopup);
  }
};