const apiConfig = {
  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-14',
  headers: {
    authorization: '1e849a66-2a28-4954-8281-86577a798237',
    'Content-Type': 'application/json'
  }
};

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject('...');
}

export const getUserInfo = () => {
  return fetch(`${apiConfig.baseUrl}/users/me`, {
    headers: apiConfig.headers
  })
  .then(res => checkResponse(res))
};

export const getInitialCards = () => {
  return fetch(`${apiConfig.baseUrl}/cards`, {
    headers: apiConfig.headers
  })
  .then(res => checkResponse(res))
};

export const userDataUpdate = (nameUser, aboutUser) => {
  return fetch(`${apiConfig.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: nameUser,
      about: aboutUser
    })
  })
  .then(res => checkResponse(res))
};

export const addCard = (placeName, linkImg) => {
  return fetch(`${apiConfig.baseUrl}/cards`, {
    method: 'POST',
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: placeName,
      link: linkImg
    })
  })
  .then(res => checkResponse(res))
};

export const deleteCard = (cardID) => {
  return fetch(`${apiConfig.baseUrl}/cards/${cardID}`, {
    method: 'DELETE',
    headers: apiConfig.headers
  })
  .then(res => checkResponse(res))
};

export const toggleLike = (cardID, isLiked) => {
  if (isLiked) {
    return fetch(`${apiConfig.baseUrl}/cards/likes/${cardID}`, {
      method: 'DELETE',
      headers: apiConfig.headers
    })
    .then(res => checkResponse(res))
  } else {
    return fetch(`${apiConfig.baseUrl}/cards/likes/${cardID}`, {
      method: 'PUT',
      headers: apiConfig.headers
    })
    .then(res => checkResponse(res))
    
  }
};

export const avatarUpdate = (linkImg) => {
  return fetch(`${apiConfig.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: apiConfig.headers,
    body: JSON.stringify({
      avatar: linkImg
    })
  })
  .then(res => checkResponse(res))
};
