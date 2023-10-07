//  functions
import fetchQuote from './fetchQuote'
import copyClipBoard from './copyClipBoard'
import appearMessage from './appearMessage'
//  component
import CardQuote from '../components/CardQuotes/CardQuote'

const addListener = () => {
  const target = document.querySelector('.container')

  target.addEventListener('click', async (event) => {
    // eslint-disable-next-line no-unused-expressions
    event.target.id === 'btn-refresh'
      ? (await copyClipBoard('.cardQuote-content'),
        appearMessage())
      : event.target.id === 'btn-copy'
        ? (
            document.querySelector('.quote-wrapper')
              .innerHTML = CardQuote(await fetchQuote())
          )
        : console.error(`${event.target.id} no esta dentro de las conciencias`)
  })
}

export default addListener
