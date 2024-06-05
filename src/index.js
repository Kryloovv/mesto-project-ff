import './pages/index.css';
import { createCard, handlerDeleteIconClick, handlerLikeIconCard } from './components/card.js';
import { openModal, closeModal, handleOverlayClick } from './components/modal.js';
import { fillProfileValuesToForm } from './components/form.js';
import { validationConfig, clearValidation, enableValidation } from './components/validation.js';
import { getUserInfo, getInitialCards, userDataUpdate, addCard, avatarUpdate } from './components/api.js';

// - Глобальные константы
// Кнопки для открытия popup-ов
const editOpenButton = document.querySelector('.profile__edit-button');
const newCardOpenButton = document.querySelector('.profile__add-button');
const cardsContainer = document.querySelector('.places__list');
const avatarOpenButton = document.querySelector('.profile__avatar-button');

// Информация о пользователе 
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileImage = document.querySelector('.profile__image');

// Popup и форма провфиля
const popupEdit = document.querySelector('.popup_type_edit');
const editCloseButton = popupEdit.querySelector('.popup__close');
const formEdit = document.querySelector('.edit-profile');
const nameInput = formEdit.querySelector('.popup__input_type_name');
const jobInput = formEdit.querySelector('.popup__input_type_description');

// Popup и форма аватара
const popupAvatar = document.querySelector('.popup_type_avatar');
const avatarCloseButton = popupAvatar.querySelector('.popup__close');
const formAvatar = document.querySelector('.avatar');
const avatarInput = formAvatar.querySelector('.popup__input_type_url');

// Popup и форма новой карточки
const popupNewCard = document.querySelector('.popup_type_new-card');
const newCardCloseButton = popupNewCard.querySelector('.popup__close');
const formNewPlace = document.querySelector('.new-place');
const cardNameInput = formNewPlace.querySelector('.popup__input_type_card-name');
const cardUrlInput = formNewPlace.querySelector('.popup__input_type_url');

// Popup карточки
const popupImage = document.querySelector('.popup_type_image');
const imageCloseButton = popupImage.querySelector('.popup__close');
const popupImageCard = document.querySelector('.popup__image');
const popuppImageCardCaption = document.querySelector('.popup__caption');

// - Функции
// Открытие popup-а с картинкой
const handleCardImgClick = (evt) => {
  popupImageCard.src = evt.currentTarget.src;
  popupImageCard.alt = evt.currentTarget.alt;
  popuppImageCardCaption.textContent = evt.currentTarget.alt;
  openModal(popupImage);
}

// Загрузка карточек с Сервера
Promise.all([getUserInfo(), getInitialCards()])
  .then(([userData, cards]) => {
    cards.forEach( (card) => {
      cardsContainer.append(createCard(
        card,
        userData._id,
        handleCardImgClick,
        handlerDeleteIconClick,
        handlerLikeIconCard
      ));
    })
  })

// Включение валадации 
enableValidation(validationConfig);

// Меняем текст кнопки, при отправке запросв на сервер
const renderLoading = (isLoading, form) => {
  const formButton = form.querySelector('.popup__button');

  if (isLoading) {
    formButton.textContent = 'Сохранение...';
  } else {
    formButton.textContent = 'Сохранение';
  }
}

// Загрузка инормации о пользователе с сервера
getUserInfo()
  .then((userInfo) => {
    profileTitle.textContent = userInfo.name;
    profileDescription.textContent = userInfo.about;
    profileImage.src = userInfo.avatar;
  })

// - Обработчики событий
// Открытие popup-ов
editOpenButton.addEventListener('click', () => {
  openModal(popupEdit);
  //Подтягиваем информацию о пользователе в инпуты
  fillProfileValuesToForm(nameInput, jobInput, profileTitle, profileDescription);
  clearValidation(popupEdit, validationConfig);
});

newCardOpenButton.addEventListener('click', () => {
  openModal(popupNewCard);
  clearValidation(popupNewCard, validationConfig);
});

avatarOpenButton.addEventListener('click', () => {
  openModal(popupAvatar);
  clearValidation(popupAvatar, validationConfig);
});

// Закрытие popup-ов
editCloseButton.addEventListener('click', () => closeModal(popupEdit));
newCardCloseButton.addEventListener('click', () => closeModal(popupNewCard));
imageCloseButton.addEventListener('click', () => closeModal(popupImage));
avatarCloseButton.addEventListener('click', () => closeModal(popupAvatar));

popupEdit.addEventListener('click', handleOverlayClick);
popupNewCard.addEventListener('click', handleOverlayClick);
popupImage.addEventListener('click', handleOverlayClick);
popupAvatar.addEventListener('click', handleOverlayClick);

// Редактирование профиля
formEdit.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  // Обновляем информацию о пользователе на сервере
  renderLoading(true, formEdit);
  userDataUpdate(nameInput.value, jobInput.value)
    .finally(() => {
      closeModal(popupEdit);
      renderLoading(false, formEdit);
    });
});

// Обновление аватара 
formAvatar.addEventListener('submit', (evt) => {
  evt.preventDefault();
  renderLoading(true, formAvatar);
  // Сохраняем данные новой карточки на сервер
  avatarUpdate(avatarInput.value)
    .then((profileData) => {
      profileImage.src = profileData.avatar;
      closeModal(popupAvatar);
    })
    .finally(() => {
      renderLoading(false, formAvatar);
      formAvatar.reset();
    });
});

// Добовление новой карточки
formNewPlace.addEventListener('submit', (evt) => {
  evt.preventDefault();
  // Сохраняем данные новой карточки на сервер
  renderLoading(true, formNewPlace);
  addCard(cardNameInput.value, cardUrlInput.value)
    .then((dataCard) => {
      cardsContainer.prepend(createCard(
        dataCard,
        dataCard.owner._id,
        handleCardImgClick,
        handlerDeleteIconClick,
        handlerLikeIconCard
      ));
      closeModal(popupNewCard);
    })
    .finally(() => {
      renderLoading(false, formNewPlace);
      formNewPlace.reset();
    });
});

