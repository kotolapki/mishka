'use strict'
let burgerButton = document.querySelector('.navigation__button');
let pageHeader = document.querySelector('.page-header');
let siteNavigation = document.querySelector('.navigation__site-nav');
let userNavigation = document.querySelector('.navigation__user-nav');
burgerButton.onclick = function() {
  burgerButton.classList.toggle('button-clicked');
  pageHeader.classList.toggle('navigation-resize');
  siteNavigation.classList.toggle('navigation-show');
  userNavigation.classList.toggle('navigation-show');
}