'use strict'

let popupOpenBtn = document.querySelector('.popup-btn');
let popup = document.querySelector('.popup');
let popupOverlay = document.querySelector('.popup-overlay');
let popupSubmitBtn = popup.querySelector('.popup__submit-btn');

popupOpenBtn.onclick = function () {
  popupOverlay.classList.add('open-popup');
  popup.classList.add('open-popup');
}

window.addEventListener('keydown', function(e) {
  if (e.keyCode === 27) {
    e.preventDefault();
    popup.classList.remove('open-popup');
    popupOverlay.classList.remove('open-popup');
  }
});

popupOverlay.onclick = function () {
  popup.classList.remove('open-popup');
  popupOverlay.classList.remove('open-popup');
}

popupSubmitBtn.onclick = function (e) {
  e.preventDefault();
}
