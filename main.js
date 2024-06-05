(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-14",headers:{authorization:"1e849a66-2a28-4954-8281-86577a798237","Content-Type":"application/json"}},t=function(e){return e.ok?e.json():Promise.reject("...")},n=function(n,r){(function(n){return fetch("".concat(e.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:e.headers}).then((function(e){return t(e)}))})(r).then((function(){return n.remove()})).catch((function(e){return console.log(e)}))},r=function(n,r,o){(function(n,r){return r?fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:e.headers}).then((function(e){return t(e)})):fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then((function(e){return t(e)}))})(n,r.classList.contains("card__like-button_is-active")).then((function(e){r.classList.toggle("card__like-button_is-active"),o.textContent=e.likes.length})).catch((function(e){return console.log(e)}))},o=function(e,t,n,r,o){var c=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),u=c.querySelector(".card__title"),a=c.querySelector(".card__image"),i=c.querySelector(".card__delete-button"),l=c.querySelector(".card__like-button"),s=c.querySelector(".card__like-counter");return a.src=e.link,a.alt=e.name,u.textContent=e.name,s.textContent=e.likes.length,e.likes.forEach((function(e){e._id==t&&l.classList.add("card__like-button_is-active")})),a.onerror=function(){c.remove()},a.addEventListener("click",n),l.addEventListener("click",(function(){o(e._id,l,s)})),e.owner._id==t?i.addEventListener("click",(function(){r(c,e._id)})):i.remove(),c},c=function(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",i)},u=function(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",i)},a=function(e){e.target==e.currentTarget&&u(e.currentTarget)},i=function(e){if("Escape"==e.key){var t=document.querySelector(".popup_is-opened");u(t)}},l={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input_error_visible"},s=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},d=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))},p=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){s(e,n,t)})),d(n,r,t)};function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var _,y=document.querySelector(".profile__edit-button"),v=document.querySelector(".profile__add-button"),m=document.querySelector(".profile__avatar-button"),h=document.querySelector(".profile__title"),S=document.querySelector(".profile__description"),b=document.querySelector(".profile__image"),q=document.querySelector(".popup_type_edit"),E=q.querySelector(".popup__close"),L=document.querySelector(".edit-profile"),g=L.querySelector(".popup__input_type_name"),k=L.querySelector(".popup__input_type_description"),C=document.querySelector(".popup_type_avatar"),x=C.querySelector(".popup__close"),A=document.querySelector(".avatar"),T=A.querySelector(".popup__input_type_url"),w=document.querySelector(".places__list"),U=document.querySelector(".popup_type_new-card"),j=U.querySelector(".popup__close"),O=document.querySelector(".new-place"),B=O.querySelector(".popup__input_type_card-name"),P=O.querySelector(".popup__input_type_url"),D=document.querySelector(".popup_type_image"),M=D.querySelector(".popup__close"),N=document.querySelector(".popup__image"),I=document.querySelector(".popup__caption"),J=function(e){N.src=e.currentTarget.src,N.alt=e.currentTarget.alt,I.textContent=e.currentTarget.alt,c(D)};Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then((function(e){return t(e)})),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then((function(e){return t(e)}))]).then((function(e){var t,c,u=(c=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,u,a=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(a.push(r.value),a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,c)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(t,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=u[0],i=u[1];h.textContent=a.name,S.textContent=a.about,b.src=a.avatar,i.forEach((function(e){w.append(o(e,a._id,J,n,r))}))})).catch((function(e){return console.log(e)})),_=l,Array.from(document.querySelectorAll(_.formSelector)).forEach((function(e){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);d(n,r,l),n.forEach((function(t){t.addEventListener("input",(function(){!function(e,t){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?s(e,t,l):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,l)}(e,t),d(n,r,l)}))}))}(e,_)}));var H=function(e,t){t.querySelector(".popup__button").textContent=e?"Сохранение...":"Сохранение"};y.addEventListener("click",(function(){var e,t,n;c(q),e=k,t=h,n=S,g.value=t.textContent,e.value=n.textContent,p(q,l)})),v.addEventListener("click",(function(){c(U),p(U,l)})),m.addEventListener("click",(function(){c(C),p(C,l)})),E.addEventListener("click",(function(){return u(q)})),j.addEventListener("click",(function(){return u(U)})),M.addEventListener("click",(function(){return u(D)})),x.addEventListener("click",(function(){return u(C)})),q.addEventListener("click",a),U.addEventListener("click",a),D.addEventListener("click",a),C.addEventListener("click",a),L.addEventListener("submit",(function(n){var r,o;n.preventDefault(),H(!0,L),(r=g.value,o=k.value,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:r,about:o})}).then((function(e){return t(e)}))).then((function(e){h.textContent=e.name,S.textContent=e.about,u(q)})).catch((function(e){return console.log(e)})).finally((function(){return H(!1,L)}))})),A.addEventListener("submit",(function(n){var r;n.preventDefault(),H(!0,A),(r=T.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then((function(e){return t(e)}))).then((function(e){b.src=e.avatar,A.reset(),u(C)})).catch((function(e){return console.log(e)})).finally((function(){return H(!1,A)}))})),O.addEventListener("submit",(function(c){var a,i;c.preventDefault(),H(!0,O),(a=B.value,i=P.value,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:a,link:i})}).then((function(e){return t(e)}))).then((function(e){w.prepend(o(e,e.owner._id,J,n,r)),u(U),O.reset()})).catch((function(e){return console.log(e)})).finally((function(){return H(!1,O)}))}))})();