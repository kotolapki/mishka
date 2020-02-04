'use strict'
let burgerButton = document.querySelector('.navigation__button');
let navigation = document.querySelector('.navigation__list');
burgerButton.onclick = function() {
  burgerButton.classList.toggle('button-clicked');
  navigation.classList.toggle('navigation-clicked');
}