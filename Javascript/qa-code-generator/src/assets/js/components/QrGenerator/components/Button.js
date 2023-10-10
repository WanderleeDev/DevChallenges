const Button = (text) => {
  return (
    `<a href="#qr" id="btnGenerator" class="text-white font-semibold bg-clr-primary cursor-pointer px-12 py-4 rounded-[.8rem]  transition-transform hover:scale-95 active:scale-105 select-none text-xs sm:text-base" title="generate QR" aria-label="generate QR">${text}</a>`
  )
}

export default Button
