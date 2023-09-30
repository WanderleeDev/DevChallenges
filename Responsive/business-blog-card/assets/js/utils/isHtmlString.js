const isHtmlString = (str) => {
  //  crea una nueva instancia de DOMParser
  //  utiliza el método parseFormSting de la nueva instancia para convertirlo a un objeto que representa un documento, en este caso HTML
  // la cedan de texto STR se encontrada ubicada el el body del HTML 
  const doc = new DOMParser().parseFromString(str, 'text/html')
  //  Primero obtiene todos los elementos de body del documento en un nodeList
  //  Se convierte el nodeList En array mediante Array.from()
  //  Utiliza la función some para verificar si el array tiene algún elemento
  //  some devuelve true si al menos uno en el array es verdad
  //  compara .nodeType  tipo de node es igual a 1 esto representa que en un elemento HTML
  //  Si tiene  elemento demostrara que la cadena si era en formato HTML
  const isHtml = Array.from(doc.body.childNodes).some(node => node.nodeType === 1)
  
  //  Devuelve un boolean indicando el resultado
  return isHtml
}

export default isHtmlString
