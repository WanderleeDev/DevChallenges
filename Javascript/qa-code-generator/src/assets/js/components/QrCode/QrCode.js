import LogoQr from "../LogoQr/LogoQr"
import Btn from "./Btn"

import downloadIcon from '../../../images/download.svg'
import copyIcon from '../../../images/copy.svg'

const QrCode = () => {
  const ContentBtn = [
    {
      content: 'Download',
      icon: downloadIcon
    },
    {
      content: 'Share',
      icon: copyIcon
    }
  ]
  return (`
  <a class="absolute top-8 left-8 scale-75" href="" rel="noopener noferrer" aria-label="to home">
    ${LogoQr()}
  </a>
  <section class="min-h-[100dvh] grid place gap-20 place-items-center place-content-center">
    <div id="qrContainer" class="p-8  w-max relative z-10 after:absolute after:inset-0 after:bg-clr-secondary after:-z-10 after:rounded-[50%] p-child">
    </div>
    <div class="flex xs:gap-4 flex-wrap justify-center items-center">
      ${ContentBtn.map(btn => (`${Btn(btn)}`)).join("")}
    </div>
  </section>
  `)
}

export default QrCode
