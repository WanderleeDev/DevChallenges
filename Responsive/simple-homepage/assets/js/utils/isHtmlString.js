const isHtmlString = (str) => {
  //  crea una nueva instancia de DOMParser
  //  utiliza el método parseFormSting de la nueva instancia para convertirlo a un objeto que representa un documento, en este caso HTML
  // el parámetro STR se encontrara ubicado el body del HTML 
  const doc = new DOMParser().parseFromString(str, 'text/html')
  //  Primero obtiene todos los elementos de body del documento en un nodeList
  //  Se convierte el nodeList en un array mediante Array.from()
  //  Utiliza la función some para verificar si el array tiene algún elemento
  //  some devuelve true si al menos uno en el array es verdad
  //  compara .nodeType si el tipo de node es igual será true 
  //  1 en un node representa que es un elemento HTML
  //  Esto demostrara que la cadena si era en formato HTML
  const isHtml = Array.from(doc.body.childNodes).some(node => node.nodeType === 1)
  
  //  Devuelve un boolean indicando el resultado
  return isHtml
}

export default isHtmlString
