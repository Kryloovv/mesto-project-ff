import { openModal } from './modal.js';
import { popupImage, popupImageCard, popuppImageCardCaption } from '../index.js';

export const handleCardClick = (evt) => {
  popupImageCard.src = evt.currentTarget.src;
  popupImageCard.alt = evt.currentTarget.alt;
  popuppImageCardCaption.textContent = evt.currentTarget.alt;
  openModal(popupImage);
}

export const handlerDeleteClick = (evt) => {
  evt.target.parentElement.remove();
}

export const handlerLikeCard = (evt) => {
  evt.target.classList.toggle('card__like-button_is-active');
}

// Функция создания карточки
export const createCard = (nameCard, linkImg, openImage, deleteCard, likeCard) => {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  const cardTitle = cardElement.querySelector('.card__title');
  const cardImage = cardElement.querySelector('.card__image');
  const cardDeleteButton = cardElement.querySelector('.card__delete-button');
  const likeButton = cardElement.querySelector('.card__like-button');

  cardImage.src = linkImg;
  cardImage.alt = nameCard;
  cardTitle.textContent = nameCard;

  cardImage.addEventListener('click', (evt) => {
    handleCardClick(evt);
  });
  cardDeleteButton.addEventListener('click', deleteCard);
  likeButton.addEventListener('click', likeCard);

  return cardElement;
}