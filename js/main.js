let encryptButton = document.querySelector("#encryptButton");
let decryptorButton = document.querySelector("#decryptorButton");
let copyButton = document.querySelector("#copyButton");

let message = document.querySelector("#textEncryptor");
let errorMessage = document.querySelector("#errorMessage");

let encryptor = document.querySelector("#messageResolved");

let frontFrame = document.querySelector("#frontFrame");
let backFrame = document.querySelector("#backFrame");

encryptButton.addEventListener("click", function () {
  if (message.value != "") {
    viewFrame(frontFrame, backFrame);
    let encryptedText = message.value
      .replaceAll("e", "enter")
      .replaceAll("i", "imes")
      .replaceAll("a", "ai")
      .replaceAll("o", "ober")
      .replaceAll("u", "ufat");
    encryptor.textContent = encryptedText;
  }
});

decryptorButton.addEventListener("click", function () {
  if (message.value != "") {
    viewFrame(frontFrame, backFrame);
    let decryptedText = message.value
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ai", "a")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u");
    encryptor.textContent = decryptedText;
  }
});

copyButton.addEventListener("click", function () {
  navigator.clipboard.writeText(encryptor.textContent);
  message.value = "";
  viewFrame(backFrame, frontFrame);
});

message.addEventListener("input", function () {
  let characters = /^[a-z\s]+$/;
  if (message.value == "" || characters.test(message.value)) {
    message.classList.remove("borderError");
    encryptButton.classList.remove("deactivate");
    decryptorButton.classList.remove("deactivate");
    errorMessage.style.removeProperty("color");
  } else {
    message.classList.add("borderError");
    encryptButton.classList.add("deactivate");
    decryptorButton.classList.add("deactivate");
    errorMessage.style.color = "#ff0000";
  }
  if (message.value == "") {
    viewFrame(backFrame, frontFrame);
  }
});

function viewFrame(hideFrame, showFrame) {
  hideFrame.classList.add("invisible");
  showFrame.classList.remove("invisible");
}
