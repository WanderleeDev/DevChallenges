import Header from "./component/Header.js"
import Form from "./component/Form.js"
import Logo from "./component/Logo.js"
Logo

const App = () => {
  return(`
    ${Header()}
    ${Form()}
    ${Logo()}
  `).trim()
}

export default App