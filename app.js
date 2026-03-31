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

  alert("Account created successfully!");
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

// ===== SAVE ENTRY =====
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

  document.getElementById("entry").value = "";

  displayEntries();
}

// ===== DISPLAY ENTRIES =====
function displayEntries() {
  let entries = JSON.parse(localStorage.getItem("entries")) || [];
  let container = document.getElementById("entries");

  if (!container) return;

  container.innerHTML = "";

  entries.forEach(e => {
    container.innerHTML += `
      <div style="border-bottom:1px solid #ddd; margin:5px 0;">
        <p>${e.text}</p>
        <small>${e.date}</small>
      </div>
    `;
  });
}

// ===== LOGOUT =====
function logout() {
  window.location.href = "index.html";
}

// ===== AFFIRMATIONS + LOAD ENTRIES =====
window.onload = function () {
  const affirmations = [
    "You are doing amazing 🌸",
    "Your thoughts matter ✨",
    "Growth takes time 🌱",
    "Be proud of yourself 💖"
  ];

  const random = affirmations[Math.floor(Math.random() * affirmations.length)];
  const aff = document.getElementById("affirmation");

  if (aff) aff.innerText = random;

  displayEntries();
};
