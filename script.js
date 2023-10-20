function sayHello() {
  alert("Hello World!")
}

function changeBackground() {
  const body = document.querySelector("body")
  body.style.backgroundColor = "darkgrey"
}

function deleteText () {
  const Textloeschen = document.querySelector("#to-delete")
  Textloeschen.textContent = "Inhalt gelöscht"
}

function incrementCounter(){
  const TextHochzählen = document.querySelector("#counter")
  let num = parseInt(TextHochzählen.textContent)
  num = num + 1
  TextHochzählen.textContent = num
}


function decrementCounter(){
  const TextAbzählen = document.querySelector("#counter")
  let num = parseInt(TextAbzählen.textContent)
  num = num - 1
  TextAbzählen.textContent = num
}


function resetCounter(){
  const TextAuf0Stellen = document.querySelector("#counter")
  let num = parseInt(TextAuf0Stellen.textContent)
  num = 0
  TextAuf0Stellen.textContent = num
}


function writeText(){
  const TextSchreiben = document.querySelector("#input")
  const inputText = TextSchreiben.value
  const outputElement = document.querySelector("#output")  
  const outputText = outputElement.textContent
 
  outputElement.textContent = outputText + "\n" + inputText

}
