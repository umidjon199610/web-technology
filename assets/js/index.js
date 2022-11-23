// changing info
const typedText = document.querySelector("#greeting");
const textArray = [
  "My name is Umid",
  "I'm talanted JavaScript dev",
  "I'm good at problem solving!",
];
const delay = 100;
const switchTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, delay);
  } else {
    setTimeout(erase, switchTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, delay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, delay + 1100);
  }
}

// handle error
function handleNameError() {
  document.getElementById("name").addEventListener("keydown", (event) => {
    if (event.target.value.length <= 3) {
      document.getElementById("invalidName").style.display = "block";
    } else {
      document.getElementById("invalidName").style.display = "none";
    }
  });
}

function handleEmailError() {
  document.getElementById("email").addEventListener("keydown", (event) => {
    isValid = String(event.target.value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if (isValid) {
      document.getElementById("invalidEmail").style.display = "none";
    } else {
      document.getElementById("invalidEmail").style.display = "block";
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(type, switchTextDelay + 250);
  handleNameError();
  handleEmailError();
});
