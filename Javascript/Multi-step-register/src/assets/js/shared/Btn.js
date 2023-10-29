const Btn = (id, text = 'Next') => {
  return (`
    <button id="btn${id}" class="bg-gradient-to-b from-[#845EEE] to-[#652CD1] block mx-auto rounded-3xl py-2 px-12 font-medium transition-transform hover:scale-95 active:scale-105 disabled:cursor-not-allowed disabled:scale-100" 
    type="submit">
      ${text}
    </button>
  `)
}

export default Btn
