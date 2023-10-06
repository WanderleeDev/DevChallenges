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
      <div class="fixed bg-[#FFFFFF] duration-200  right-0 top-0 bottom-0 nav-responsive text-5xl font-black flex flex-col gap-16 items-center pt-24 xl:static xl:p-0 xl:text-base xl:flex-row xl:w-auto xl:bg-[initial]">
        <ul class="text-[var(--text-gray)] flex flex-col gap-16 xl:flex-row">
          ${listItems.map( item => (`
            <li>${item}</li>
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
