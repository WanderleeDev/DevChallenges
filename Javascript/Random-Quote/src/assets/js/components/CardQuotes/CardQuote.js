import './cardQuote.css'
import Tag from '../Tag/Tag'

const CardQuote = (data) => {
  return (`
  <figure class="cardQuote">
    <figcaption class="cardQuote-author">${data.author}</figcaption>
    <div class="cardQuote-tags">
      ${data.tags.map(dataTag => (`${Tag(dataTag)}`)).join('')}
    </div>
    <q class="cardQuote-content">
      ${data.content}
    </q>
  </figure>
  `)
}

export default CardQuote
