import Logo from "./component/logo.js"
import Card from "./component/card.js"

const App = () => {
  return(`
  ${Logo()}
  ${Card()}
  `).trim()
}

export default App