/* eslint-disable no-undef */
'use strict';
(function () {
  var page = document.querySelector('.page');
  var body = page.querySelector('body');
  var headerButton = body.querySelector('.header__contacts-button');
  var modal = body.querySelector('.modal');
  var modalClose = modal.querySelector('.modal__close');
  var sectionsSite = body.querySelector('.footer__sections-site');
  var sectionsSiteList = body.querySelector('.footer__sections-site-list');
  var contactsList = body.querySelector('.footer__contacts-list');
  var contacts = body.querySelector('.footer__contacts');
  var modalForm = modal.querySelector('.modal__feedback-form');
  var fullName = modalForm.querySelector('input[name=fullName]');
  var telfields = body.querySelectorAll('input[type=tel]');
  var modalTelfield = modalForm.querySelector('input[type=tel]');
  var modalTextarea = modalForm.querySelector('#modalTextarea');
  var ESC = 27;
  var TAB = 9;

  // focusElements = [
  //   'a[href]',
  //   'area[href]',
  //   'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
  //   'select:not([disabled]):not([aria-hidden])',
  //   'textarea:not([disabled]):not([aria-hidden])',
  //   'button:not([disabled]):not([aria-hidden])',
  //   'iframe',
  //   'object',
  //   'embed',
  //   '[contenteditable]',
  //   '[tabindex]:not([tabindex^="-"])'
  // ];

  sectionsSiteList.classList.add('footer__sections-site-list--deactive');
  contactsList.classList.add('footer__contacts-list--deactive');

  var isStorageSupport = true;
  var storage = '';

  try {
    storage = localStorage.getItem('fullName');
    storage = localStorage.getItem('modalTelfield');
    storage = localStorage.getItem('modalTextarea');
  } catch (err) {
    isStorageSupport = false;
  }

  function onSubmitForm() {
    if (fullName.value || modalTelfield.value || modalTextarea.value) {
      if (isStorageSupport) {
        localStorage.setItem('fullName', fullName.value);
        localStorage.setItem('modalTelfield', modalTelfield.value);
        localStorage.setItem('modalTextarea', modalTextarea.value);
      }
    }
  }

  for (var i = 0; i < telfields.length; i++) {
    // eslint-disable-next-line no-new
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
    modal.classList.remove('modal--deactive');
    page.classList.add('page--active');

    if (storage) {
      fullName.value = storage;
      modalTelfield.focus();
    } else {
      fullName.focus();
    }
  }

  function onModalClose() {
    modal.classList.add('modal--deactive');
    page.classList.remove('page--active');
  }

  function onEscapePress(evt) {
    if (evt.keyCode === ESC) {
      if (!modal.classList.contains('modal--deactive')) {
        evt.preventDefault();
        onModalClose();
      }
    }
  }

  function onTab(evt) {
    if (evt.keyCode === TAB) {
      if (modalClose.focus()) {
        fullName.focus();
      }
    }
  }

  headerButton.addEventListener('click', onModalAdd);
  modalClose.addEventListener('click', onModalClose);
  modal.addEventListener('click', function (evt) {
    if (evt.target === evt.currentTarget) {
      onModalClose();
    }
  });
  sectionsSite.addEventListener('click', onToggleSections);
  contacts.addEventListener('click', onToggleContacts);
  modalForm.addEventListener('click', onSubmitForm);
  window.addEventListener('keydown', onEscapePress);
  window.addEventListener('keydown', onTab);
})();
