// script.js

// إرسلل تنبيه
alert(" Welcome, the weekly ranking list has been successfully added !")


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
