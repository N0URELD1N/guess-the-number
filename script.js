// script.js
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  const message = document.getElementById("message");
  
  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "الرجاء إدخال رقم صالح بين 1 و 100";
    message.style.color = "red";
    return;
  }

  attempts++;

  if (guess === randomNumber) {
    message.textContent = `أحسنت! لقد خمنت الرقم في ${attempts} محاولة`;
    message.style.color = "green";
  } else if (guess < randomNumber) {
    message.textContent = "الرقم أكبر من ذلك!";
    message.style.color = "blue";
  } else {
    message.textContent = "الرقم أصغر من ذلك!";
    message.style.color = "blue";
  }
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("guessInput").value = '';
  document.getElementById("message").textContent = '';
}