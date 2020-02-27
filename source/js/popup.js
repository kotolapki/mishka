'use strict'

let popupOpenBtn = document.querySelector('.product-of-week__button');
let popup = document.querySelector('.product-of-week__popup');
let popupOverlay = document.querySelector('.product-of-week__popup-overlay');
let popupSubmitBtn = popup.querySelector('.product-of-week__popup-submit-btn');

popupSubmitBtn.onclick = function (e) {
  e.preventDefault();
}

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