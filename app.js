let current = 0;
const pages = document.querySelectorAll(".page");

function openBook() {
  document.querySelector(".cover").style.display = "none";
  document.getElementById("book").style.display = "block";
  show(0);
}

function show(i) {
  pages.forEach(p => p.classList.remove("active"));
  pages[i].classList.add("active");
}

function next() {
  if (current < pages.length - 1) {
    current++;
    show(current);
  }
}

function prev() {
  if (current > 0) {
    current--;
    show(current);
  }
}

/* SAVE SYSTEM */
const inputs = document.querySelectorAll("textarea, input");

inputs.forEach(el => {
  el.value = localStorage.getItem(el.id) || "";

  el.addEventListener("input", () => {
    localStorage.setItem(el.id, el.value);
  });
});
