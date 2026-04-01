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


// ================= COVER CONTROL =================

function showLogin() {
  document.getElementById("coverPage").classList.add("hidden");
  document.getElementById("loginPage").classList.remove("hidden");
}

// ================= AUTH =================

function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const error = document.getElementById("errorMsg");

  if (!user || !pass) {
    error.innerText = "Please fill all fields";
    return;
  }

  if (user === "admin" && pass === "1234") {
    localStorage.setItem("role", "admin");
    window.location.href = "admin.html";
    return;
  }

  if (user === "pay") {
    window.location.href = "pay.html";
    return;
  }

  localStorage.setItem("role", "user");
  localStorage.setItem("name", user);

  window.location.href = "journal.html";
}

// ================= PROTECT =================

function protect() {
  const role = localStorage.getItem("role");

  if (!role) {
    // only protect journal/admin/pay pages
    return;
  }
}

protect();

// ================= LOGOUT =================

function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}

  if (user === "pay") {
    window.location.href = "pay.html";
    return;
  }

  localStorage.setItem("role", "user");
  localStorage.setItem("name", user);

  window.location.href = "journal.html";
}

// Protect pages
function protect() {
  const role = localStorage.getItem("role");
  if (!role) {
    window.location.href = "index.html";
  }
}

protect();

// ================= LOGOUT =================

function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    showPage();
  }
}

function initJournal() {
  const affirmations = [
    "I am becoming her ✨",
    "I am enough 💖",
    "I glow differently now 🌸",
    "I trust my journey 🌱"
  ];

  const poems = [
    "You are not behind, you are unfolding.",
    "Soft heart, strong future.",
    "You survived what once broke you."
  ];

  const words = ["Glow", "Peace", "Healing", "Confidence"];

  const a = document.getElementById("affirmation");
  const p = document.getElementById("poem");
  const w = document.getElementById("word");

  if (a) a.innerText = random(affirmations);
  if (p) p.innerText = random(poems);
  if (w) w.innerText = random(words);

  showPage();
}

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function vent() {
  const replies = [
    "I hear you 💖",
    "You are safe here 🌸",
    "Let it out, I’m listening ✨",
    "You are not alone 💕"
  ];

  document.getElementById("aiReply").innerText = random(replies);
}

document.addEventListener("change", function (e) {
  if (e.target.id === "imageUpload") {
    const reader = new FileReader();
    reader.onload = () => {
      document.getElementById("preview").src = reader.result;
    };
    reader.readAsDataURL(e.target.files[0]);
  }
});
const role = localStorage.getItem("role");

if (!role) {
  window.location.href = "index.html";
}

window.onload = initJournal;
