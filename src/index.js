import './pages/index.css';
import { initialCards } from './cards.js';
import { createCard, handleCardClick, handlerDeleteClick, handlerLikeCard } from './components/card.js';
import { openModal, closeModal, handleOverlayClick } from './components/modal.js';
import { fillProfileValuesToForm } from './components/form.js';

// Глобальные константы
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const editOpenButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const editCloseButton = popupEdit.querySelector('.popup__close');
const formEdit = document.querySelector('.edit-profile');
const nameInput = formEdit.querySelector('.popup__input_type_name');
const jobInput = formEdit.querySelector('.popup__input_type_description');

const newCardOpenButton = document.querySelector('.profile__add-button');
const popupNewCard = document.querySelector('.popup_type_new-card');
const newCardCloseButton = popupNewCard.querySelector('.popup__close');
const formNewPlace = document.querySelector('.new-place');
const cardNameInput = popupNewCard.querySelector('.popup__input_type_card-name');
const cardUrlInput = popupNewCard.querySelector('.popup__input_type_url');

const cardsContainer = document.querySelector('.places__list');
export const popupImage = document.querySelector('.popup_type_image');
const imageCloseButton = popupImage.querySelector('.popup__close');
export const popupImageCard = document.querySelector('.popup__image');
export const popuppImageCardCaption = document.querySelector('.popup__caption');

// Функции
initialCards.forEach( (objCard) => {
  cardsContainer.append(createCard( objCard.name, objCard.link, handleCardClick, handlerDeleteClick, handlerLikeCard));
})

// Обработчики событий 
editOpenButton.addEventListener('click', () => {
  openModal(popupEdit);
  fillProfileValuesToForm(nameInput, jobInput, profileTitle, profileDescription);
});
editCloseButton.addEventListener('click', () => closeModal(popupEdit));
popupEdit.addEventListener('click', handleOverlayClick);

newCardOpenButton.addEventListener('click', () => openModal(popupNewCard));
newCardCloseButton.addEventListener('click', () => closeModal(popupNewCard));
popupNewCard.addEventListener('click', handleOverlayClick);

imageCloseButton.addEventListener('click', () => closeModal(popupImage));
popupImage.addEventListener('click', handleOverlayClick);

formEdit.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(popupEdit);
});

formNewPlace.addEventListener('submit', (evt) => {
  evt.preventDefault();
  cardsContainer.prepend(createCard(cardNameInput.value, cardUrlInput.value, handleCardClick, handlerDeleteClick, handlerLikeCard));
  formNewPlace.reset();
  closeModal(popupNewCard);
});