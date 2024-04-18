// @todo: Функция удаления карточки
const deleteParentElement = (element) => {
  element.parentElement.remove();
}

// @todo: Функция создания карточки
const addCard = (nameCard, linkImg, deleteParentElement) => {
  // @todo: Темплейт карточки
  const cardTemplate = document.querySelector('#card-template').content;
  // @todo: DOM узлы
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardsContainer = document.querySelector('.places__list');

  const cardImage = cardElement.querySelector('.card__image');
  const cardDeleteButton = cardElement.querySelector('.card__delete-button');
  const cardTitle = cardElement.querySelector('.card__title');

  cardImage.src = linkImg;
  cardImage.alt = `Реальность имеет свои пределы. Мир воображения безграничен. Представь, что тут фото - ${nameCard}`;
  cardTitle.textContent = nameCard;

  cardDeleteButton.addEventListener('click', (evt) => {
    deleteParentElement(evt.target);
  });

  cardsContainer.append(cardElement);
}

// @todo: Вывести карточки на страницу
initialCards.forEach( (objCard) => {
  addCard(objCard.name, objCard.link, deleteParentElement);
})