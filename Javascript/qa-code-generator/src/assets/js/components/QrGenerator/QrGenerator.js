import QrLogo from '../../../images/logo-qr-generator.svg'
import Input from './components/Input'
import Button from './components/Button'

const QrGenerator = () => {
  return (`
    <div class="grid gap-8 justify-items-center mt-[25vh] xs:px-8">
      <img class="object-cover w-48 select-none" src="${QrLogo}" alt="QrCode logo">
      <label for="inputText" 
        class="border-2 border-clr-primary bg-[#030617] p-[.35rem] rounded-[1.3rem] focus-within:border-blue-700 grid xs:grid-cols-[1fr_auto] w-responsive">
        ${Input()}
        ${Button()}
      </label>
    </div>
  `)
}

export default QrGenerator
