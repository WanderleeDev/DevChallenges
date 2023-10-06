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
    <nav class="flex justify-between gap-4">
      <div id="listOption" class="fixed bg-[#FFFFFF] duration-200 translate-x-full right-0 top-0 bottom-0 nav-responsive text-5xl font-black flex flex-col gap-16 items-center pt-24 xl:static xl:p-0 xl:text-base xl:flex-row xl:w-auto xl:translate-x-0 xl:bg-[initial]">
        <ul class="text-[var(--text-clr)] flex flex-col gap-16 xl:flex-row font-semibold">
          ${listItems.map( item => (`
            <li class="first:text-[#223344] cursor-pointer" >${item}</li>
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
