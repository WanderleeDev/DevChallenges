import BtnDarkMode from "./BtnDarkMode.js"
import BtnMobile from "./BtnMobile.js"

const NavBar = () => {
    const listItems = [
      'About us',
      'Product',
      'Resource',
      'Contact'
    ]
  return (`
    <nav class="flex justify-between gap-4 ">
      <div id="listOption" class="fixed bg-[var(--color-light-1)] duration-200 translate-x-full right-0 top-0 bottom-0 nav-responsive text-5xl font-black flex flex-col gap-16 items-center pt-24 lg:static lg:p-0 lg:text-base lg:flex-row lg:w-auto lg:translate-x-0 lg:bg-[initial] lg:gap-32 xl:gap-64">
        <ul class="text-[var(--text-clr)] flex flex-col gap-16 lg:flex-row font-semibold">
          ${listItems.map( item => (`
            <li class="first:text-[var(--color-dark-2)] cursor-pointer" >${item}</li>
          `)).join("")}
        </ul>
        <div>
          ${BtnDarkMode()}
        </div>
      </div>
      ${BtnMobile()}
    </nav>
  `)
}

export default NavBar
