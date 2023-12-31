import './app.css'
import CardQuote from './assets/js/components/CardQuotes/CardQuote'
import Button from './assets/js/components/Button/Button'
import fetchQuote from './assets/js/utils/fetchQuote'
import MessageCopy from './assets/js/components/MenssageCopy/MessageCopy'

const App = async () => {
  const quote = await fetchQuote()
  return (`
    ${MessageCopy()}
    <div class="quote-wrapper">
      ${CardQuote(quote)}
    </div>
    ${Button()}
  `).trim()
}

export default App
