import './style.css'
import routes from './src/assets/routes/routes'


const initApp = () => {
  routes(window.location.hash)
  window.addEventListener('hashchange', () => {
    routes(window.location.hash)
  })
}

initApp()
