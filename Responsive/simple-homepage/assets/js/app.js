import Header from "./component/Header/Header.js"
import Presentation from "./component/Presentation/Presentation.js"
import MainImage from "./component/MainImage.js"

const App = () => {
  return(`
    ${Header()}
    ${MainImage()}
    ${Presentation()}
  `).trim()
}


export default App