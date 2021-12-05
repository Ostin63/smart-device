/* eslint-disable no-new */
/* eslint-disable no-undef */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */
var page = document.querySelector('.page');
var body = page.querySelector('.body');
var headerButton = body.querySelector('.header__contacts-button');
var modal = body.querySelector('.modal');
var modalClose = modal.querySelector('.modal__close');
var overLay = body.querySelector('.modal-overlay');
var sectionsSite = body.querySelector('.footer__sections-site');
var contacts = body.querySelector('.footer__contacts');
var inputTels = document.querySelectorAll('input[type=tel]');

for (var i = 0; i < inputTels.length; i++) {
  new IMask(inputTels[i], {
    mask: '+{7}(000)0000000',
  });
}

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
  overLay.classList.remove('modal-overlay--deactive');
  page.classList.add('page--active');
}

function removeModal() {
  modal.classList.remove('modal--active');
  overLay.classList.add('modal-overlay--deactive');
  page.classList.remove('page--active');
}

headerButton.addEventListener('click', addModal);
modalClose.addEventListener('click', removeModal);
overLay.addEventListener('click', removeModal);
sectionsSite.addEventListener('click', onToggleSections);
contacts.addEventListener('click', onToggleContacts);
// isEscEvent.addEventListener('click', removeModal);
