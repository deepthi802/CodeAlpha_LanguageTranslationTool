async function translateText() {
  const text = document.getElementById("inputText").value;
  const source = document.getElementById("sourceLang").value;
  const target = document.getElementById("targetLang").value;

  const response = await fetch("https://api.mymemory.translated.net/get", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      q: text,
      source: source,
      target: target,
      format: "text"
    })
  });

  const data = await response.json();

  document.getElementById("outputText").innerText =
    data.translatedText;
}catch(error){
    document.getElementById("outputText").innerText =
    "Translation failed. Please try again .";
      }
}

function copyText() {
  const text =
    document.getElementById("outputText").innerText;

  navigator.clipboard.writeText(text);

  alert("Copied to clipboard!");
}

function speakText() {
  const text =
    document.getElementById("outputText").innerText;

  const speech = new SpeechSynthesisUtterance(text);

  window.speechSynthesis.speak(speech);
}
