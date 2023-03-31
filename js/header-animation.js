const greetings = [
  "Hello!",
  "Bonjour!",
  "Hola!",
  "Ciao!",
  "はじめまして",
  "Salut",
  "Howdy",
];

let currentGreetingIndex = 0;
const greetingElement = document.querySelector(".greeting");

setInterval(() => {
  currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length;
  greetingElement.innerText = greetings[currentGreetingIndex];
}, 5000);
