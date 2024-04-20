const cardsContainer = document.querySelector('.places__list');

// @todo: Функция удаления карточки
const deleteParentElement = (element) => {
  element.parentElement.remove();
}

// @todo: Функция создания карточки
const createCard = (nameCard, linkImg, deleteParentElement) => {
  // @todo: Темплейт карточки
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  // @todo: DOM узлы
  const cardImage = cardElement.querySelector('.card__image');
  const cardDeleteButton = cardElement.querySelector('.card__delete-button');
  const cardTitle = cardElement.querySelector('.card__title');

  cardImage.src = linkImg;
  cardImage.alt = `Реальность имеет свои пределы. Мир воображения безграничен. Представьте, что тут фото - ${nameCard}`;
  cardTitle.textContent = nameCard;

  cardDeleteButton.addEventListener('click', (evt) => {
    deleteParentElement(evt.target);
  });
  
  return cardElement;
}

// @todo: Вывести карточки на страницу
initialCards.forEach( (objCard) => {
  cardsContainer.append(createCard(objCard.name, objCard.link, deleteParentElement));
})