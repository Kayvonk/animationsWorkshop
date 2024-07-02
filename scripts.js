let startBtn = document.getElementById("startBtn");
let catImg = document.querySelector(".catImg");

let correctCard = "card2";

startBtn.addEventListener("click", function () {
  startBtn.style.display = "none";

  let cards = document.querySelectorAll(".card");

  for (let i = 0; i < cards.length; i++) {
    const element = cards[i];
    element.classList.add("flip");
    catImg.classList.add("reveal");
    setTimeout(() => {
      element.classList.remove("flip");
      catImg.classList.remove("reveal");
    }, 4000);
  }
});

let cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", function (e) {
    let element = e.target;
    let cardNumber = element.classList[1];
    if (cardNumber === correctCard) {
      element.style.animationIterationCount = "0.5";
      catImg.style.animationIterationCount = "0.5";

      catImg.classList.add("reveal");
      console.log("Winner!");
    }
    element.classList.add("flip");
  });
});
