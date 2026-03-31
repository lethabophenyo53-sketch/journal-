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
    alert("Wrong details");
  }
}

// ===== JOURNAL INIT =====
function initJournal() {

  const affirmations = [
    "You are becoming your best self.",
    "Peace is yours to keep.",
    "You are safe, soft, and growing.",
    "Everything is unfolding perfectly."
  ];

  document.getElementById("affirmation").innerText =
    affirmations[Math.floor(Math.random() * affirmations.length)];

  autoSave();
  reminder();
}

// ===== AUTO SAVE =====
function autoSave() {
  ["affNote", "diary", "free"].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;

    el.value = localStorage.getItem(id) || el.value;

    el.addEventListener("input", () => {
      localStorage.setItem(id, el.value);
    });
  });
}

// ===== PREMIUM REMINDER =====
function reminder() {
  setInterval(() => {
    const note = document.createElement("div");

    note.innerText = "Take a breath… check in with yourself 💭";

    note.style.position = "fixed";
    note.style.bottom = "20px";
    note.style.right = "20px";
    note.style.padding = "14px 18px";
    note.style.background = "rgba(124, 58, 237, 0.9)";
    note.style.color = "white";
    note.style.borderRadius = "14px";
    note.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
    note.style.fontSize = "14px";

    document.body.appendChild(note);

    setTimeout(() => note.remove(), 5000);
  }, 30000);
}
