async function translateText() {
    const input = document.getElementById("inputText").value
    const fromLang = document.getElementById("sourceLang").value;
    const toLang = document.getElementById("targetLang").value;

    // You can use an actual API here. For now, mock output:
    document.getElementById("outputText").innerText = 
      'Translating "${input}" from ${fromLang} to ${toLang}...';
    
    // TODO: Repalce with API integration 
}
