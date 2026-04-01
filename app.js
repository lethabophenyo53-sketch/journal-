/* PAGE */
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

/* SIGN UP */
function signup() {
  localStorage.setItem("email", email.value);
  localStorage.setItem("password", password.value);
  alert("Account created");
}

/* LOGIN (ADMIN FIXED) */
function login() {
  const emailVal = email.value;
  const passwordVal = password.value;

  if (emailVal === "lethabophenyo53@gmail.com" && passwordVal === "1234") {

    let mode = confirm("Admin mode?\nOK = Premium\nCancel = Normal");

    if (mode) {
      localStorage.setItem("premium", "true");
    } else {
      localStorage.setItem("premium", "false");
    }

    window.location.href = "journal.html";
    return;
  }

  if (
    emailVal === localStorage.getItem("email") &&
    passwordVal === localStorage.getItem("password")
  ) {
    window.location.href = "journal.html";
  } else {
    alert("Wrong login");
  }
}

/* PAYSTACK */
function payNow() {
  let handler = PaystackPop.setup({
    key: "YOUR_PUBLIC_KEY",
    email: localStorage.getItem("email"),
    amount: 5000,
    currency: "ZAR",
    callback: function () {
      localStorage.setItem("premium", "true");
      alert("Paid 💎");
    }
  });
  handler.openIframe();
}

/* CONTENT */
function initJournal() {
  const affirmations = ["You are enough 💖", "You are growing ✨"];
  const words = ["Growth", "Peace"];

  if (document.getElementById("affirmation")) {
    document.getElementById("affirmation").innerText =
      affirmations[Math.floor(Math.random() * affirmations.length)];
  }

  if (document.getElementById("word")) {
    document.getElementById("word").innerText =
      words[Math.floor(Math.random() * words.length)];
  }
}

/* AI */
function vent() {
  document.getElementById("aiReply").innerText = "I hear you 💖";
}

/* START */
document.addEventListener("DOMContentLoaded", () => {
  showPage();
  initJournal();
});
