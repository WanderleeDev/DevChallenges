const fetchQuote = async () => {
  try {
    const fetchData = await fetch('https://api.quotable.io/random')

    if (!fetchData.ok) {
      throw new Error(`Error al obtener la cita: ${fetchData.status}`)
    }

    const data = await fetchData.json()
    return data
  } catch (error) {
    throw new Error(`Fallo al realizar el fetch de la data : ${error}`)
  }
}

export default fetchQuote
