const copyClipBoardHandler = async (target) => {
  const copyText = document.querySelector(target)

  if (!copyText) {
    throw new Error(`No se encontró ningún elemento identificado con ${target}`)
  }

  const text = copyText.title
  await navigator.clipboard.writeText(text.trim())
}

const copyClipBoard = () => {
  const triggerBtn = document.querySelector('#btnGenerator')
  triggerBtn.addEventListener('click', async () => await copyClipBoardHandler('#qrContainer'))
}

export default copyClipBoard
