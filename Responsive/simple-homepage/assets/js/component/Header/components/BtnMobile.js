const BtnMobile = () => {

  return (`
    <button id="btnMobile" class="grid cursor-pointer text-[var(--color-dark-2)] mt-1 xl:hidden">
      <span id="openIcon" class=" row-start-1 col-start-1 scale-[var(--scaleFull)]">☰</span>
      <span id="closeIcon" class="row-start-1 col-start-1 scale-[var(--scaleNone)]">ｘ</span>
    </button>
  `)
}

export default BtnMobile
