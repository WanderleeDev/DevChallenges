const validateInput= () => {
  const inputText = document.querySelector('#inputText')
  if (!inputText) {
    return ''
  }
  return inputText.value
}

export default validateInput
