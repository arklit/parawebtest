import { getContent } from '../Api/getContent'
import { template, cards } from '../utils/constants'
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

getCards()

const number = document.querySelector('.header__phone')
const email = document.querySelector('.header__email')
const mobile = window.matchMedia('(max-width: 767px)')

function swapHeader() {
  if (mobile.matches) {
    number.textContent = '';
    email.textContent = '';
    email.classList.add('header__email-mobile')
    number.classList.add('header__phone-mobile')
  } else {
  email.classList.remove('header__email-mobile')
  number.classList.remove('header__phone-mobile')
  email.textContent = "sales@logo.ru"
  number.textContent = '8 800 000 00 00'
  }
}
swapHeader()
