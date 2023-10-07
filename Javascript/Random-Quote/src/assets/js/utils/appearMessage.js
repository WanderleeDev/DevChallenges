const appearMessage = () => {
  const elementToAnimate = document.querySelector('.message')
  elementToAnimate.classList.remove('animate-message')
  setTimeout(() => {
    elementToAnimate.classList.add('animate-message')
  }, 500)
}

export default appearMessage
