import './pages/index.css';
import { createCard, handlerDeleteIconClick, handlerLikeIconCard } from './components/card.js';
import { openModal, closeModal, handleOverlayClick } from './components/modal.js';
import { fillProfileValuesToForm } from './components/form.js';
import { validationConfig, clearValidation, enableValidation } from './components/validation.js';
import { getUserInfo, getInitialCards, userDataUpdate, addCard, avatarUpdate } from './components/api.js';

// - Глобальные константы
// Кнопки для открытия popup-ов
const buttonOpenPopupProfilel = document.querySelector('.profile__edit-button');
const buttonOpenPopupNewCard = document.querySelector('.profile__add-button');
const buttonOpenPopupAvatar = document.querySelector('.profile__avatar-button');

// Информация о пользователе 
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileImage = document.querySelector('.profile__image');

// Popup и форма провфиля
const popupProfilel = document.querySelector('.popup_type_edit');
const buttonClosePopupProfilel = popupProfilel.querySelector('.popup__close');
const formProfilel = document.querySelector('.edit-profile');
const inputUpdateProfilelName = formProfilel.querySelector('.popup__input_type_name'); // inputUpdateName
const inputUpdateProfilelDescription = formProfilel.querySelector('.popup__input_type_description');

// Popup и форма аватара
const popupAvatar = document.querySelector('.popup_type_avatar');
const buttonClosePopupAvatar = popupAvatar.querySelector('.popup__close');
const formAvatar = document.querySelector('.avatar');
const inputUpdateAvatar = formAvatar.querySelector('.popup__input_type_url');

// Popup и форма новой карточки
const containerCards = document.querySelector('.places__list');
const popupNewCard = document.querySelector('.popup_type_new-card');
const buttonClosePopupNewCard = popupNewCard.querySelector('.popup__close');
const formNewPlace = document.querySelector('.new-place');
const inputNameNewCard = formNewPlace.querySelector('.popup__input_type_card-name');
const inputImageLinkNewCard = formNewPlace.querySelector('.popup__input_type_url');

// Popup карточки
const popupImage = document.querySelector('.popup_type_image');
const buttonClosePopupImage = popupImage.querySelector('.popup__close');
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

Promise.all([getUserInfo(), getInitialCards()])
  .then(([userData, cardsData]) => {
    // Загрузка инормации о пользователе с сервера
    profileName.textContent = userData.name;
    profileDescription.textContent = userData.about;
    profileImage.src = userData.avatar;

    // Загрузка карточек с Сервера
    cardsData.forEach( (card) => {
      containerCards.append(createCard(
        card,
        userData._id,
        handleCardImgClick,
        handlerDeleteIconClick,
        handlerLikeIconCard
      ));
    })
  })
  .catch(err => console.log(err)); 

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

// - Обработчики событий
// Открытие popup-ов
buttonOpenPopupProfilel.addEventListener('click', () => {
  openModal(popupProfilel);
  //Подтягиваем информацию о пользователе в инпуты
  fillProfileValuesToForm(inputUpdateProfilelName, inputUpdateProfilelDescription, profileName, profileDescription);
  clearValidation(popupProfilel, validationConfig);
});

buttonOpenPopupNewCard.addEventListener('click', () => {
  openModal(popupNewCard);
  clearValidation(popupNewCard, validationConfig);
});

buttonOpenPopupAvatar.addEventListener('click', () => {
  openModal(popupAvatar);
  clearValidation(popupAvatar, validationConfig);
});

// Закрытие popup-ов
buttonClosePopupProfilel.addEventListener('click', () => closeModal(popupProfilel));
buttonClosePopupNewCard.addEventListener('click', () => closeModal(popupNewCard));
buttonClosePopupImage.addEventListener('click', () => closeModal(popupImage));
buttonClosePopupAvatar.addEventListener('click', () => closeModal(popupAvatar));

popupProfilel.addEventListener('click', handleOverlayClick);
popupNewCard.addEventListener('click', handleOverlayClick);
popupImage.addEventListener('click', handleOverlayClick);
popupAvatar.addEventListener('click', handleOverlayClick);

// Редактирование профиля
formProfilel.addEventListener('submit', (evt) => {
  evt.preventDefault();
  // Обновляем информацию о пользователе на сервере
  renderLoading(true, formProfilel);
  userDataUpdate(inputUpdateProfilelName.value, inputUpdateProfilelDescription.value)
    .then((userData) => {
      profileName.textContent = userData.name;
      profileDescription.textContent = userData.about;
      closeModal(popupProfilel);
    })
    .catch(err => console.log(err))
    .finally(() => renderLoading(false, formProfilel));
});

// Обновление аватара 
formAvatar.addEventListener('submit', (evt) => {
  evt.preventDefault();
  renderLoading(true, formAvatar);
  // Сохраняем данные новой карточки на сервер
  avatarUpdate(inputUpdateAvatar.value)
    .then((profileData) => {
      profileImage.src = profileData.avatar;
      formAvatar.reset();
      closeModal(popupAvatar);
    })
    .catch(err => console.log(err))
    .finally(() => renderLoading(false, formAvatar));
});

// Добовление новой карточки
formNewPlace.addEventListener('submit', (evt) => {
  evt.preventDefault();
  // Сохраняем данные новой карточки на сервер
  renderLoading(true, formNewPlace);
  addCard(inputNameNewCard.value, inputImageLinkNewCard.value)
    .then((dataCard) => {
      containerCards.prepend(createCard(
        dataCard,
        dataCard.owner._id,
        handleCardImgClick,
        handlerDeleteIconClick,
        handlerLikeIconCard
      ));
      closeModal(popupNewCard);
      formNewPlace.reset();
    })
    .catch(err => console.log(err))
    .finally(() => renderLoading(false, formNewPlace));
});