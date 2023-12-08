export function getVoices(): SpeechSynthesisVoice[] | null {
  const voices: SpeechSynthesisVoice[] = window.speechSynthesis.getVoices();
  if (voices.length <= 0) {
    return null
  }
  return voices
}
