const addListener = (elementTarget, fnListener) => {
  const targetElement = document.querySelector(elementTarget);

  if (!targetElement) {
    throw new Error(`No existe el elemento identificado con : ${elementTarget}`) 
  }

  targetElement.addEventListener('click', fnListener);
}

export default addListener
