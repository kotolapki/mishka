'use strict'

const burgerButton = document.querySelector('.navigation__button');
const pageHeader = document.querySelector('.page-header');
const siteNavigation = document.querySelector('.navigation__site-nav');
const userNavigation = document.querySelector('.navigation__user-nav');
//removing 'no-js' classes
burgerButton.classList.remove('button-clicked');
burgerButton.classList.remove('no-js-btn');
pageHeader.classList.remove('navigation-resize');
siteNavigation.classList.remove('navigation-show');
userNavigation.classList.remove('navigation-show');

burgerButton.onclick = () => {
  burgerButton.classList.toggle('button-clicked');
  pageHeader.classList.toggle('navigation-resize');
  siteNavigation.classList.toggle('navigation-show');
  userNavigation.classList.toggle('navigation-show');
}