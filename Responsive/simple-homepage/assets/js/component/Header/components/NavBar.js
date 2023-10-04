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
    <nav>
      <ul class="text-[var(--text-gray)]">
        ${listItems.map( item => (`
          <li>${item}</li>
        `)).join("")}
      </ul>
      ${BtnDarkMode()}
      ${BtnMobile()}
    </nav>
  `)
}

export default NavBar
