const HTML = document.querySelector('html');
const btnHandler = () => HTML.classList.toggle('dark');

const addDarkMode = (target) => {
  const btnToggle = document.querySelector(target);
  if (!btnToggle) {
    throw new Error(`No existe el elemento identificado con : ${target}`) 
  }
  btnToggle.addEventListener('click', btnHandler)
}

export default addDarkMode