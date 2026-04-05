let currentPage = 0;
const pages = document.querySelectorAll(".page");

// PAGE SYSTEM
function showPage(index) {
  pages.forEach((p, i) => {
    p.classList.remove("active");
    if (i === index) p.classList.add("active");
  });
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
}

// DAILY SAVE SYSTEM
const today = new Date().toISOString().split("T")[0];

const inputs = document.querySelectorAll("textarea");

// LOAD
window.addEventListener("load", () => {
  inputs.forEach(input => {
    const key = today + "-" + input.id;
    const saved = localStorage.getItem(key);
    if (saved) input.value = saved;
  });
});

// SAVE
inputs.forEach(input => {
  input.addEventListener("input", () => {
    const key = today + "-" + input.id;
    localStorage.setItem(key, input.value);
  });
});

// INIT FIRST PAGE
document.addEventListener("DOMContentLoaded", () => {
  showPage(0);
});
