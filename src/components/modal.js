export const openModal = (popup) => {
  popup.classList.add('popup_is-opened');
};

export const closeModal = (popup) => {
  popup.classList.remove('popup_is-opened');
};

export const handleOverlayClick = (evt) => {
  if (evt.target == evt.currentTarget) {
    closeModal(evt.currentTarget);
  }
};

export const handleEscapeKeydown = (evt) => {
  const activePopup = document.querySelector('.popup_is-opened');
  if (evt.key == 'Escape' && activePopup) {
    closeModal(activePopup);
  }
};



// import { 
//   createCard,
//   deleteCard,
//   handlerLikeCards
// } from './card.js';

// export const openModal = (evt) => {
//   // находим кнопку по которой нажали, для открытия нужного popup-а
//   if (evt.target == editOpenButton) {
//     profileValue();
//     popupEdit.classList.add('popup_is-opened');
//   } else if (evt.target == newCardOpenButton) {
//     popupNewCard.classList.add('popup_is-opened')
//   } else if (evt.target.classList.contains('card__image')) {
//     popupImageCard.src = evt.target.src;
//     popupImageCard.alt = evt.target.alt;
//     popupImage.classList.add('popup_is-opened');
//   }

//   // находим кнопку по которой нажали, для добавления обработчиков
//   if (
//     evt.target == editOpenButton ||
//     evt.target == newCardOpenButton ||
//     evt.target.classList.contains('card__image')
//   ) {
//     // находим активный popup и кноку закрытия
//     const activePopup = document.querySelector('.popup_is-opened');
//     const closeButton = activePopup.querySelector('.popup__close');

//     // вешаем обработчики 
//     closeButton.addEventListener('click', handleCloseClick);
//     activePopup.addEventListener('click', handleOverlayClick);
//     document.addEventListener('keydown', handleEscapeKeydown);
//   }
// };

// const closeModal = () => {
//   // находим активный popup и кноку закрытия
//   const activePopup = document.querySelector('.popup_is-opened');
//   const closeButton = activePopup.querySelector('.popup__close');

//   // Закрываем активный popup
//   activePopup.classList.remove('popup_is-opened');

//   // Удаляем обработчики
//   closeButton.removeEventListener('click', handleCloseClick);
//   activePopup.removeEventListener('click', handleOverlayClick);
//   document.removeEventListener('click', handleEscapeKeydown);
// };

// const handleCloseClick = () => closeModal();

// const handleOverlayClick = (evt) => {
//   const activePopup = document.querySelector('.popup_is-opened');
//   if (evt.target == activePopup) closeModal();
// };

// const handleEscapeKeydown = (evt) => {
//   if (evt.key == 'Escape') closeModal();
// };

// const profileValue = () => {
//   nameInput.value = profileTitle.textContent;
//   jobInput.value = profileDescription.textContent;
// } 

// export const handleEditFormSubmit = (evt) => {
//   evt.preventDefault();
//   profileTitle.textContent = nameInput.value;
//   profileDescription.textContent = jobInput.value;
//   closeModal();
// }

// export const handleNewCardFormSubmit = (evt) => {
//   evt.preventDefault();
//   cardsContainer.prepend(createCard(cardNameInput.value, cardUrlInput.value, deleteCard, handlerLikeCards));
//   cardNameInput.value = '';
//   cardUrlInput.value = '';
//   closeModal();
// }