const downloadHandler = (pathImg) => {
  const newLink = document.createElement('a')
  newLink.href = pathImg.src
  newLink.download= "QrCode.png"
  newLink.click()
}

const downloadQR = () => {
  const img = document.querySelector('#qrContainer > img')

  document.querySelector('#btnGenerator')
    .addEventListener('click', () => {
      downloadHandler(img)
    })
}

export default downloadQR
