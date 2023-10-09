const copyClipBoard = async (target) => {
  const copyText = document.querySelector(target)

  if (!copyText) {
    throw new Error(`No se encontró ningún elemento identificado con ${target}`)
  }

  const text = copyText.textContent
  console.log(text)
  await navigator.clipboard.writeText(text.trim())
}

export default copyClipBoard
