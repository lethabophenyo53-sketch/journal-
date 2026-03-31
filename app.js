// ===== LOGIN =====
function signup() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  localStorage.setItem("email", email);
  localStorage.setItem("pass", pass);

  alert("Account created 💖");
}

function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (
    email === localStorage.getItem("email") &&
    pass === localStorage.getItem("pass")
  ) {
    window.location.href = "journal.html";
  } else {
    alert("Wrong login");
  }
}

// ===== JOURNAL INIT =====
function initJournal() {

  // Affirmations
  const affirmations = [
    "You are the main character 💖",
    "Everything is aligning for you ✨",
    "You deserve peace and softness 🌸",
    "You are growing beautifully 🌷"
  ];

  document.getElementById("affirmation").innerText =
    affirmations[Math.floor(Math.random() * affirmations.length)];

  // AUTO SAVE
  autoSave();

  // REMINDER
  setInterval(() => {
    alert("💖 Hey… time to check in with yourself");
  }, 30000);
}

// ===== AUTO SAVE =====
function autoSave() {
  const fields = ["affNote", "diary", "free"];

  fields.forEach(id => {
    const el = document.getElementById(id);

    if (!el) return;

    // load saved
    el.value = localStorage.getItem(id) || el.value;

    // save while typing
    el.addEventListener("input", () => {
      localStorage.setItem(id, el.value);
    });
  });
}
