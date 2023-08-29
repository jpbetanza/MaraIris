export function talk(text){
    let utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    utterance.voice = window.speechSynthesis.getVoices()[14]; //Voz PT-BR
    window.speechSynthesis.speak(utterance);
}