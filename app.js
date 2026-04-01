/* PAGE SYSTEM */
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
}

/* JOURNAL CONTENT */
function initJournal() {
  const affirmations = [
    "I am growing every day ✨",
    "I am enough 💖",
    "I am becoming my best self 🌸"
  ];

  const words = ["Growth", "Healing", "Confidence", "Peace"];

  const affirmationEl = document.getElementById("affirmation");
  const wordEl = document.getElementById("word");

  if (affirmationEl) {
    affirmationEl.innerText =
      affirmations[Math.floor(Math.random() * affirmations.length)];
  }

  if (wordEl) {
    wordEl.innerText =
      words[Math.floor(Math.random() * words.length)];
  }
}

/* AI VENT */
function vent() {
  const replies = [
    "I hear you 💖",
    "You are safe here 🌸",
    "You’re doing your best ✨",
    "Let it out, I’m here 💕"
  ];

  document.getElementById("aiReply").innerText =
    replies[Math.floor(Math.random() * replies.length)];
}

/* IMAGE UPLOAD */
document.addEventListener("change", function (e) {
  if (e.target.id === "imageUpload") {
    let reader = new FileReader();
    reader.onload = function () {
      document.getElementById("preview").src = reader.result;
    };
    reader.readAsDataURL(e.target.files[0]);
  }
});

/* START */
document.addEventListener("DOMContentLoaded", () => {
  showPage();
  initJournal();
});
