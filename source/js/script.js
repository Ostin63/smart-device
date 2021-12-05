/* eslint-disable strict */
/* eslint-disable no-unused-vars */
var page = document.querySelector('.page');
var body = page.querySelector('.body');
var headerButton = body.querySelector('.header__contacts-button');
var modal = body.querySelector('.modal');
var modalClose = modal.querySelector('.modal__close');
var sectionsSite = body.querySelector('.footer__sections-site');
var contacts = body.querySelector('.footer__contacts');

var keys = {
  escape: 'Escape',
  esc: 'Escape',
};

function onToggleSections() {
  sectionsSite.classList.toggle('footer__sections-site--active');
  contacts.classList.remove('footer__contacts--active');
}

function onToggleContacts() {
  contacts.classList.toggle('footer__contacts--active');
  sectionsSite.classList.remove('footer__sections-site--active');
}

// function isEscEven(evt) {
//   evt.key === keys.escape || evt.key === keys.esc
// }

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
modal.addEventListener('click', removeModal);
sectionsSite.addEventListener('click', onToggleSections);
contacts.addEventListener('click', onToggleContacts);
// isEscEvent.addEventListener('click', removeModal);
