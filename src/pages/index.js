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


