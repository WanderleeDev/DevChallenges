class RenderHtml {
  errorMessage = 'Solo es válido contenido HTML en forma de cadena o instancia de HTMLElement.'

  constructor (target) {
    this.targetElement = document.querySelector(target)

    if (!this.targetElement) {
      throw new Error(`No se encuentra el objetivo con la clase o identificador ${target}`)
    }
  }

  validatePosition (position) {
    const validPositions = ['afterbegin', 'afterend', 'beforebegin', 'beforeend']
    const positionError = `La posición proporcionada no es válida. Las siguientes son correctas: ${validPositions}`

    if (!validPositions.includes(position)) {
      throw new Error(positionError)
    }
  }

  isHtmlString (str) {
    const tempDocument = new DOMParser().parseFromString(str, 'text/html')
    const isHtml = Array.from(tempDocument.body.childNodes).some(node => node.nodeType === 1)
    return isHtml
  }

  renderContent (content, position = 'beforeend') {
    this.validatePosition(position)

    if (content instanceof HTMLElement) {
      this.targetElement.insertAdjacentElement(position, content)
    }

    if (typeof content === 'string' && this.isHtmlString(content)) {
      this.targetElement.insertAdjacentHTML(position, content)
    } else {
      throw new Error(this.errorMessage)
    }
  }
}

export default RenderHtml
