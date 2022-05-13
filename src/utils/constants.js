const cards = document.querySelector('.cards');
const template = document.querySelector('template').content.querySelector('.card');
const form = document.querySelector('.filter__author')
const number = document.querySelector('.header__phone')
const email = document.querySelector('.header__email')
const mobile = window.matchMedia('(max-width: 767px)')
const authorInput = document.querySelector('.filter_input-author')
export {
  authorInput,
  mobile,
  email,
  number,
  form,
  cards,
  template,
}
