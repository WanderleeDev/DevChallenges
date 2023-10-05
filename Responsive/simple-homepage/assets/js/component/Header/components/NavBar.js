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
    <nav class="flex justify-between gap-4 relative">
      <div class="absolute">
        <ul class="text-[var(--text-gray)]">
          ${listItems.map( item => (`
            <li>${item}</li>
          `)).join("")}
        </ul>
        ${BtnDarkMode()}
      </div>
      ${BtnMobile()}
    </nav>
  `)
}

export default NavBar
