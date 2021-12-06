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
var modalForm = modal.querySelector('.modal__feedback-form');
var fullName = modalForm.querySelector('input[name=fullName]');
var telfields = body.querySelectorAll('input[type=tel]');
var modalTelfield = modalForm.querySelector('input[type=tel]');
var modalTextarea = modalForm.querySelector('#modalTextarea');

var isStorageSupport = true;
var storage = '';

try {
  storage = localStorage.getItem('fullName');
  storage = localStorage.getItem('modalTelfield');
  storage = localStorage.getItem('modalTextarea');
} catch (err) {
  isStorageSupport = false;
}

function onSubmitForm(evt) {
  if (!fullname.value || !modalTelfield.value || !modalTextarea.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem('fullname', fullname.value);
      localStorage.setItem('modalTelfield', modalTelfield.value);
      localStorage.setItem('modalTextarea', modalTextarea.value);
    }
  }
}

for (var i = 0; i < telfields.length; i++) {
  new IMask(telfields[i], {
    mask: '+{7}(000)0000000',
  });
}

function onToggleSections() {
  sectionsSite.classList.toggle('footer__sections-site--active');
  contacts.classList.remove('footer__contacts--active');
}

function onToggleContacts() {
  contacts.classList.toggle('footer__contacts--active');
  sectionsSite.classList.remove('footer__sections-site--active');
}

function onModalAdd() {
  modal.classList.add('modal--active');
  overLay.classList.remove('modal-overlay--deactive');
  page.classList.add('page--active');

  if (storage) {
    fullName.value = storage;
    modalTelfield.focus();
  } else {
    fullName.focus();
  }
}

function onModalClose() {
  modal.classList.remove('modal--active');
  overLay.classList.add('modal-overlay--deactive');
  page.classList.remove('page--active');
}

function onEscapePress(evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains('modal--active')) {
      evt.preventDefault();
      onModalClose();
    }
  }
}

headerButton.addEventListener('click', onModalAdd);
modalClose.addEventListener('click', onModalClose);
overLay.addEventListener('click', onModalClose);
sectionsSite.addEventListener('click', onToggleSections);
contacts.addEventListener('click', onToggleContacts);
modalForm.addEventListener('click', onSubmitForm);
window.addEventListener('keydown', onEscapePress);
