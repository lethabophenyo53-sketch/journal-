let currentPage = 0;

function showPage() {
  const pages = document.querySelectorAll(".page");

  pages.forEach((p, i) => {
    p.classList.remove("active", "prev");

    if (i === currentPage) p.classList.add("active");
    if (i === currentPage - 1) p.classList.add("prev");
  });
}

function nextPage() {
  const pages = document.querySelectorAll(".page");
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage();
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    showPage();
  }

  const affirmations = [
  "I am growing every day ✨",
  "I am enough 💖",
  "I am becoming my best self 🌸"
];

const words = ["Growth", "Healing", "Confidence", "Peace"];

document.getElementById("affirmation").innerText =
  affirmations[Math.floor(Math.random() * affirmations.length)];

document.getElementById("word").innerText =
  words[Math.floor(Math.random() * words.length)];
}
