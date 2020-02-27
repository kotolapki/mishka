'use strict'

let burgerButton = document.querySelector('.navigation__button');
let pageHeader = document.querySelector('.page-header');
let siteNavigation = document.querySelector('.navigation__site-nav');
let userNavigation = document.querySelector('.navigation__user-nav');

burgerButton.classList.remove('button-clicked');
burgerButton.classList.remove('no-js-btn');
pageHeader.classList.remove('navigation-resize');
siteNavigation.classList.remove('navigation-show');
userNavigation.classList.remove('navigation-show');

burgerButton.onclick = function() {
  burgerButton.classList.toggle('button-clicked');
  pageHeader.classList.toggle('navigation-resize');
  siteNavigation.classList.toggle('navigation-show');
  userNavigation.classList.toggle('navigation-show');
}