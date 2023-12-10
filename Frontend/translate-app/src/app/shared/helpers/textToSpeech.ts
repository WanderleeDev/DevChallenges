const speecher = window.speechSynthesis;

export function textToSpeech(text: string, lang?: string): void {
  const utterThis = new SpeechSynthesisUtterance(text)
  utterThis.lang = lang || 'en-US';
  speecher.speak(utterThis)
}
