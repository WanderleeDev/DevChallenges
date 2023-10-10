import Input from './components/Input'
import Button from './components/Button'
import LogoQr from '../LogoQr/LogoQr'

const QrGenerator = () => {
  return (`
    <div id="qrForm" class="grid gap-8 justify-items-center mt-[25vh] xs:px-8">
      ${LogoQr()}
      <label for="inputText" 
        class="border-2 border-clr-primary bg-[#030617] p-[.35rem] rounded-[1.3rem] focus-within:border-blue-700 grid xs:grid-cols-[1fr_auto] w-responsive">
        ${Input()}
        ${Button('QR code')}
      </label>
    </div>
  `)
}

export default QrGenerator
