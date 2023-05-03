const logo = document.getElementById("logo");
const input = document.getElementById("input");
const output = document.getElementById("output");
const message = document.querySelector(".message");
const button = document.querySelector(".buttonCopy");
const buttonCopy = document.getElementById("button-copy");
const buttonCrypto = document.getElementById("button-crypto");
const buttonDecrypto = document.getElementById("button-decrypto");

//Regras para criptografar
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

const crypto = (value) => {
  let crypto = value.replace(/e/g, "enter");
  crypto = crypto.replace(/i/g, "imes");
  crypto = crypto.replace(/a/g, "ai");
  crypto = crypto.replace(/o/g, "ober");
  crypto = crypto.replace(/u/g, "ufat");
  output.innerText = crypto;
  console.log(crypto);
};

const decrypto = (value) => {
  let decrypto = value.replace(/enter/g, "e");
  decrypto = decrypto.replace(/imes/g, "i");
  decrypto = decrypto.replace(/ai/g, "a");
  decrypto = decrypto.replace(/ober/g, "o");
  decrypto = decrypto.replace(/ufat/g, "u");
  output.innerText = decrypto;
  console.log(decrypto);
};

buttonCrypto.addEventListener("click", function (event) {
  event.preventDefault();
  let value = input.value;
  message.classList.add("hidden");
  button.classList.remove("hidden");
  crypto(value);
});

buttonDecrypto.addEventListener("click", function (event) {
  event.preventDefault();
  let value = input.value;
  decrypto(value);
});

buttonCopy.addEventListener("click", function (event) {
  event.preventDefault();
  output.removeAttribute("disabled");
  output.select();
  document.execCommand("copy");
  output.setAttribute("disabled", true);
});

logo.addEventListener("click", function (event) {
  window.location.reload();
});
