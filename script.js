// script.js

// إرسلل تنبيه
alert(" Welcome, all of the website is in English now!")


let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  const message = document.getElementById("message");
  
  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "Please write a number betwen 1-100";
    message.style.color = "red";
    return;
  }

  attempts++;

  if (guess === randomNumber) {
    message.textContent = `Congratulations! You guessed the number in ${attempts} attempt`;
    message.style.color = "green";
  } else if (guess < randomNumber) {
    message.textContent = "The number is bigger than the number you guessed!";
    message.style.color = "Purple";
  } else {
    message.textContent = "The number is lower than the number you guessed !";
    message.style.color = "blue";
  }
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("guessInput").value = '';
  document.getElementById("message").textContent = '';
}






  const modal = document.getElementById("leaderboardModal");
  const btn = document.getElementById("showLeaderboardBtn");
  const span = document.querySelector(".close");
  const howToJoin = document.getElementById("howToJoinQuestion");
  const requirements = document.getElementById("requirements");

  // فتح النافذة
  btn.onclick = function () {
    modal.style.display = "block";
  };

  // إغلاق عند الضغط على ×
  span.onclick = function () {
    modal.style.display = "none";
  };

  // إغلاق عند الضغط خارج المربع
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // عرض المتطلبات
  howToJoin.onclick = function () {
    requirements.style.display = requirements.style.display === "none" ? "block" : "none";
  };
