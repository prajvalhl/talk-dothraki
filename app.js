const btnTranslate = document.querySelector("#btn-translate");
const inputValue = document.querySelector("#input-txt");
const outputDiv = document.querySelector("#output");

// const serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
const serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
  return `${serverURL}?text=${text}`;
}

btnTranslate.addEventListener("click", randomPrintFunction);

function randomPrintFunction() {
  const inputText = inputValue.value; // taking input

  // calling server for processing
  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => (outputDiv.innerText = json.contents.translated))
    .catch(errorHandler);
}

function errorHandler(error) {
  console.log("error occured", error);
  alert("Something wrong with server! try again after sometime.");
}
