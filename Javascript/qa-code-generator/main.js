import './style.css'
import addHtml from './src/assets/js/utils/addHtml'
import App from './src/App'
import generateQr from './src/assets/js/utils/generateQr'

addHtml('#app', App())

const btnGenerator = document.querySelector('#btnGenerator')
const inputText = document.querySelector('#inputText')
btnGenerator.addEventListener('click', () => generateQr(inputText.value))
