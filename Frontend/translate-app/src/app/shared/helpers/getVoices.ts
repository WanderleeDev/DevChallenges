//* función para recuperar los modelos de voz del navegador - A futuro implementar opciones al lector texto a voz

export function getVoicesModel(): SpeechSynthesisVoice[] | null {
  const voices: SpeechSynthesisVoice[] = window.speechSynthesis.getVoices();
  if (voices.length <= 0) {
    return null
  }
  return voices
}
