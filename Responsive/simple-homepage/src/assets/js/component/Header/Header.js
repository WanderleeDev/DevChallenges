import NavBar from "./components/NavBar.js"

const Header = () => {
  return (`
    <header>
      <img src="/src/assets/svg/alarado-icon-homepage.svg" alt="Alarado icon">
      ${NavBar()}
    </header>
  `)
}

export default Header
