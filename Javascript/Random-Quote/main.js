import './style.css'
import App from './src/App'
import addHtml from './src/assets/js/utils/addHtml'
import addListener from './src/assets/js/utils/addListener'

(async () => {
  //  agrega el componente principal al DOM
  addHtml('#app', await App())
  //  agrega los eventos de escucha
  addListener()
})()
