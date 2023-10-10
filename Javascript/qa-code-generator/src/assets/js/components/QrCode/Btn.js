const Btn = ({content, icon}) => {
  return (`
  <button 
    class="grid grid-cols-[auto_auto] gap-3 items-center text-white font-semibold bg-clr-primary cursor-pointer px-12 py-4 rounded-[.8rem] transition-transform hover:scale-95 active:scale-105 select-none text-xs sm:text-base" title="${content} QR code" 
    id="btn${content}" 
    aria-label="${content} QR code">
    ${content}
    <img class=""text-white src="${icon}" alt="icon ${content}}">
  </button>`)
}

export default Btn
