// ===== SIGN UP =====
function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);

  alert("Account created!");
}

// ===== LOGIN =====
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const savedEmail = localStorage.getItem("userEmail");
  const savedPassword = localStorage.getItem("userPassword");

  if (email === savedEmail && password === savedPassword) {
    window.location.href = "journal.html";
  } else {
    alert("Wrong email or password");
  }
}

// ===== SAVE JOURNAL ENTRY =====
function saveEntry() {
  const entry = document.getElementById("entry").value;

  if (!entry) {
    alert("Write something first");
    return;
  }

  let entries = JSON.parse(localStorage.getItem("entries")) || [];
  entries.push({
    text: entry,
    date: new Date().toLocaleString()
  });

  localStorage.setItem("entries", JSON.stringify(entries));

  alert("Entry saved!");
  document.getElementById("entry").value = "";
}

// ===== LOGOUT =====
function logout() {
  window.location.href = "index.html";
}

// ===== AFFIRMATION (auto text on journal page) =====
window.onload = function () {
  const affirmations = [
    "You are doing your best 🌸",
    "Your thoughts matter ✨",
    "Growth takes time 🌱",
    "Be proud of how far you’ve come 💖"
  ];

  const random = affirmations[Math.floor(Math.random() * affirmations.length)];
  const el = document.getElementById("affirmation");

  if (el) {
    el.innerText = random;
  }
};
