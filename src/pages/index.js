import { getContent } from '../Api/getContent'
import { template, cards, form, authorInput, number, email, mobile } from '../utils/constants'
import Swiper, { Pagination} from 'swiper';
import './index.scss'


function createCard(item) {
  const time = item.publishedAt
  const author = item.author;
  const card = template.cloneNode(true)
  card.querySelector('.card__title').textContent = item.title;
  card.querySelector('.card__author').textContent = author === null ? 'СМИ' : author;
  card.querySelector('.card__text').textContent = item.description;;
  card.querySelector('.card__date').textContent = time.substr(0,10);
  return card
}

function render(cardsArr) {
 cardsArr.forEach((card) => {
   const cardElement = createCard(card);
   cards.append(cardElement)
 })
}
function getCards() {
  getContent()
  .then((res) => {
    const cardsArr = res.articles;
    render(cardsArr)
  })
  .catch(err => console.log(err))
}


function createTextNode() {
  const currentElement = document.querySelector('.footer__logo-container')
  currentElement.insertAdjacentHTML('beforeend',' <p class="footer__info-mobile">Лицензия на телематические услуги № 176267</p>')
}

function mobileChanges() {
  if (mobile.matches) {
    number.textContent = '';
    email.textContent = '';
    email.classList.add('header__email-mobile')
    number.classList.add('header__phone-mobile')
    createTextNode()
  } else {
  email.classList.remove('header__email-mobile')
  number.classList.remove('header__phone-mobile')
  email.textContent = "sales@logo.ru"
  number.textContent = '8 800 000 00 00'
  }
}
Swiper.use([Pagination]);
const swiper = new Swiper('.swiper', {
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 1,
});

function filter() {
  const items = document.querySelectorAll('.card')
  items.forEach(item => item.remove())
  getContent()
  .then((res) => {
    const cardsArr = res.articles;
    const newArr = cardsArr.filter(item => item.author === authorInput.value)
    render(newArr)
  })
  .catch(err => console.log(err))
}

mobileChanges()
getCards()

form.addEventListener('submit', (e) => {
  e.preventDefault()
  filter()
})
