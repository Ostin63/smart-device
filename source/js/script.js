/* eslint-disable strict */
/* eslint-disable no-unused-vars */
var page = document.querySelector('.page');
var body = page.querySelector('.body');
var headerButton = body.querySelector('.header__contacts-button');
var modal = body.querySelector('.modal');
var modalClose = modal.querySelector('.modal__close');

function addModal() {
  modal.classList.add('modal--active');
  page.classList.add('page--active');
}

function removeModal() {
  modal.classList.remove('modal--active');
  page.classList.remove('page--active');
}

headerButton.addEventListener('click', addModal);
modalClose.addEventListener('click', removeModal);
