const containerQr = document.querySelector('#qrContainer')

const generateQr = (text) => {
	if (!text.trim()) {
		alert('Debe enviar un texto')
		return
	}

	const params = {
		text,
		width: 170,
		height: 170,
		colorDark: '#000',
		colorLight: '#F2F5FA'
	}
  new QRCode(containerQr, params)
}

export default generateQr
