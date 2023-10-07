import './style.css'
import App from './src/App'
import addHtml from './src/assets/js/utils/addHtml'
import addListener from './src/assets/js/utils/addListener'

//  agrega el componente principal al DOM
addHtml('#app', App())
//  agrega los eventos de escucha
addListener()
