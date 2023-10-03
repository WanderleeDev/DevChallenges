import Logo from "./component/logo.js"
import Header from "./component/Header/Header.js"

const App = () => {
  return(`
    ${Header()}
    ${Logo()}
  `).trim()
}


export default App