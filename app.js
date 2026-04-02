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

/* AFFIRMATION */
document.addEventListener("DOMContentLoaded", () => {
  const affirmations = [
    "I am the main character ✨",
    "I am enough 💖",
    "I am growing daily 🌸"
  ];

  const el = document.getElementById("affirmation");
  if (el) {
    el.innerText =
      affirmations[Math.floor(Math.random() * affirmations.length)];
  }

  showPage();
});
