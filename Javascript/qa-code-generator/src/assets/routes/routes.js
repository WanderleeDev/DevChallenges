import addHtml from "../js/utils/addHtml"
import App from "../../App"
import QrCode from "../js/components/QrCode/QrCode"
import generateQr from "../js/utils/generateQr"
import validateInput from "../js/utils/validateInput"

const routes = (route) => {
  switch (route) {
    case '':
      document.querySelector('#app').innerHTML=''
      addHtml('#app', App())
      break;
      case '#qr':
        const qrValue = validateInput()
        document.querySelector('#app').innerHTML=''
        addHtml('#app', QrCode())
        generateQr(qrValue)
      break;
    default:
      console.log('404');
  }
}

export default routes
