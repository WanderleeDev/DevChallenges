import Router from './assets/js/router/Router'
import PATHS from './assets/js/router/paths'

const App = () => {
  const ROUTER = new Router(PATHS)
  return ROUTER
}

export default App
