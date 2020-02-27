'use strict'

let searchElement = document.querySelector('.navigation__item--search');
let searchInput = searchElement.querySelector('.navigation__search-input');
let searchLabel = searchElement.querySelector('.navigation__search-label');
let searchIcon = searchElement.querySelector('.navigation__search-icon');

function searchShow () {
  searchInput.classList.remove('search-hide');
  searchLabel.classList.add('search-hide');
  searchIcon.classList.add('search-hide');
}

searchElement.addEventListener('click', function(e) {
  searchShow();
});

/*window.addEventListener('click', function(e) {
  let target = e.target;
  this.console.log(target);
  if (target !== searchElement) {
    searchInput.classList.add('search-hide');
    searchLabel.classList.remove('search-hide');
    searchIcon.classList.remove('search-hide');
  }
});*/