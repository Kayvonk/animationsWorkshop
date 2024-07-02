function shuffleCards() {}

let startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function () {
  startBtn.style.display = "none";

  let cards = document.querySelectorAll(".card");

  for (let i = 0; i < cards.length; i++) {
    const element = cards[i];

    element.classList.add("flip");
  }
});
