const HTML = document.querySelector('html');
const btnHandler = () => {
  HTML.classList.toggle('dark');
  changeColors()
};

const addDarkMode = (target) => {
  const btnToggle = document.querySelector(target);
  if (!btnToggle) {
    throw new Error(`No existe el elemento identificado con : ${target}`) 
  }

  btnToggle.addEventListener('click', btnHandler)
}

function changeColors() {
  document.documentElement.style.setProperty('--color-dark-1', '#f2f9fe');
  document.documentElement.style.setProperty('--color-light-2', '#111729');  
  document.documentElement.style.setProperty('--color-dark-2', '#FFFFFF');  
  document.documentElement.style.setProperty('--color-light-1', '#223344');  
}

export default addDarkMode
