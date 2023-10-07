import isHtmlString from './isHtmlString.js'

const addHtml = (target, content, position = 'beforeend') => {
  const targetElement = document.querySelector(target)
  //  Valida existencia del objetivo
  if (!targetElement) {
    throw new Error(`No se encuentra el objetivo con la clase o identificador ${target}`)
  }

  const validPositions = ['afterbegin', 'afterend', 'beforebegin', 'beforeend']
  //  Validar posición
  if (!validPositions.includes(position)) {
    throw new Error(`La posición proporcionada no es válida. Las siguientes son correctas: ${validPositions}`)
  }

  const ErrMessage = 'Solo es válido contenido HTML en forma de cadena o instancia de HTMLElement.'

  if (content instanceof HTMLElement) {
    targetElement.insertAdjacentElement(position, content)
  } else if (typeof content === 'string' && isHtmlString(content)) {
    targetElement.insertAdjacentHTML(position, content)
  } else {
    throw new Error(ErrMessage)
  }
}

export default addHtml
