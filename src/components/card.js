export const deleteCard = (evt) => {
  evt.target.parentElement.remove();
}

export const handlerLikeCards = (evt) => {
  evt.target.classList.toggle('card__like-button_is-active');
}

// Функция создания карточки
export const createCard = (nameCard, linkImg, deleteCard, likeCards) => {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  const cardTitle = cardElement.querySelector('.card__title');
  const cardImage = cardElement.querySelector('.card__image');
  const cardDeleteButton = cardElement.querySelector('.card__delete-button');
  const likeButton = cardElement.querySelector('.card__like-button');

  cardImage.src = linkImg;
  cardImage.alt = `Реальность имеет свои пределы. Мир воображения безграничен. Представьте, что тут изображен(-а) - ${nameCard}`;
  cardTitle.textContent = nameCard;

  cardDeleteButton.addEventListener('click', deleteCard);
  likeButton.addEventListener('click', likeCards);

  return cardElement;
}