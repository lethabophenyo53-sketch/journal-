let currentPage = 0;

/* ---------------- PAGES ---------------- */
function showPage() {
  const pages = document.querySelectorAll(".page");

  pages.forEach((p, i) => {
    p.classList.remove("active");
    if (i === currentPage) {
      p.classList.add("active");
    }
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

/* ---------------- SIGN UP ---------------- */
function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  local
