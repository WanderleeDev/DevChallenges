const speecher = window.speechSynthesis;

export function textToSpeech(text: string): void {
  const utterThis = new SpeechSynthesisUtterance(text)
  utterThis.lang = 'es-ES'
  speecher.speak(utterThis)
}
