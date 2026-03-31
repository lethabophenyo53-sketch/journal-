function signup() {
  localStorage.setItem("email", document.getElementById("email").value);
  localStorage.setItem("password", document.getElementById("password").value);
  alert("Account created 💖");
}

function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (
    email === localStorage.getItem("email") &&
    pass === localStorage.getItem("password")
  ) {
    window.location.href = "journal.html";
  } else {
    alert("Wrong login");
  }
}

function initJournal() {
  const affirmations = [
    "You are growing beautifully.",
    "You are safe and becoming your best self.",
    "Peace is already yours.",
    "You are doing better than you think."
  ];

  document.getElementById("affirmation").innerText =
    affirmations[Math.floor(Math.random() * affirmations.length)];

  autoSave();
}

/* SAVE TEXT */
function autoSave() {
  ["affNote", "diary", "free"].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;

    el.value = localStorage.getItem(id) || "";

    el.addEventListener("input", () => {
      localStorage.setItem(id, el.value);
    });
  });

  let currentPage = 0;

function showPage(index) {
  const pages = document.querySelectorAll(".page");

  pages.forEach((page, i) => {
    if (i === index) {
      page.classList.add("active");
    } else {
      page.classList.remove("active");
    }
  });
}

function nextPage() {
  const pages = document.querySelectorAll(".page");
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

/* START */
window.onload = () => {
  showPage(0);
};
}
