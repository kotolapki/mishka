'use strict'

if (document.querySelector('.popup')) {
  const popupOpenBtn = document.querySelector('.popup-btn');
  const popup = document.querySelector('.popup');
  const popupOverlay = document.querySelector('.popup-overlay');
  const popupSubmitBtn = popup.querySelector('.popup__submit-btn');
  const ESC_BUTTON_KEY_CODE = 27;
  
  popupOpenBtn.onclick = () => {
    popupOverlay.classList.add('open-popup');
    popup.classList.add('open-popup');
  }
  
  window.addEventListener('keydown', (e) => {
    if (e.keyCode === ESC_BUTTON_KEY_CODE) {
      e.preventDefault();
      popup.classList.remove('open-popup');
      popupOverlay.classList.remove('open-popup');
    }
  });
  
  popupOverlay.onclick = () => {
    popup.classList.remove('open-popup');
    popupOverlay.classList.remove('open-popup');
  }
  
  popupSubmitBtn.onclick = (e) => {
    e.preventDefault();
  }
}