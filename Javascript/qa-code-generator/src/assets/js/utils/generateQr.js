const generateQr = (text) => {
	const containerQr = document.querySelector('#qrContainer')
	
	const params = {
		text,
		width: 170,
		height: 170,
		colorDark: '#000',
		colorLight: '#F2F5FA'
	}

	if (!text) {
		params.text = 'Empty value'
		params.colorLight = '#000'
		params.colorDark = "#000"
	}
	
  new QRCode(containerQr, params)
}

export default generateQr