import './pages/index.css';
import { initialCards } from './cards.js';
import { deleteCard, handlerLikeCards, createCard } from './components/card.js';
import { openModal, handleEditFormSubmit, handleNewCardFormSubmit } from './components/modal.js';

// Глобальные константы
export const profileTitle = document.querySelector('.profile__title');
export const profileDescription = document.querySelector('.profile__description');
export const editOpenButton = document.querySelector('.profile__edit-button');
export const popupEdit = document.querySelector('.popup_type_edit');
const formEdit = document.querySelector('.edit-profile');
export const nameInput = formEdit.querySelector('.popup__input_type_name');
export const jobInput = formEdit.querySelector('.popup__input_type_description');

export const newCardOpenButton = document.querySelector('.profile__add-button');
export const popupNewCard = document.querySelector('.popup_type_new-card');
const formNewPlace = document.querySelector('.new-place');
export const cardNameInput = popupNewCard.querySelector('.popup__input_type_card-name');
export const cardUrlInput = popupNewCard.querySelector('.popup__input_type_url');

export const cardsContainer = document.querySelector('.places__list');
export const popupImage = document.querySelector('.popup_type_image');
export const popupImageCard = document.querySelector('.popup__image');

// Функции
initialCards.forEach( (objCard) => {
  cardsContainer.append(createCard(objCard.name, objCard.link, deleteCard, handlerLikeCards));
})

// Обработчики событий 
editOpenButton.addEventListener('click', openModal)
newCardOpenButton.addEventListener('click', openModal)
cardsContainer.addEventListener('click', openModal)
formEdit.addEventListener('submit', handleEditFormSubmit);
formNewPlace.addEventListener('submit', handleNewCardFormSubmit);