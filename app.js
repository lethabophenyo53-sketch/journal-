let currentMood = "";

// ===== SET MOOD =====
function setMood(mood) {
  currentMood = mood;
  document.getElementById("selectedMood").innerText = "Mood: " + mood;
}

// ===== SAVE ENTRY =====
function saveEntry() {
  const entry = document.getElementById("entry").value;

  if (!entry) {
    alert("Write something first 💭");
    return;
  }

  let entries = JSON.parse(localStorage.getItem("entries")) || [];

  entries.push({
    text: entry,
    mood: currentMood,
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

  entries.reverse().forEach(e => {
    container.innerHTML += `
      <div style="margin-bottom:10px; padding:10px; border-radius:10px; background:#fafafa;">
        <p><strong>${e.mood || ""}</strong></p>
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

// ===== DAILY EXPERIENCE =====
window.onload = function () {

  // Welcome message
  const welcome = document.getElementById("welcome");
  if (welcome) {
    welcome.innerText = "Welcome back 🌸 Today is your growth day.";
  }

  // Daily affirmations
  const affirmations = [
    "Today is a good day to grow 🌱",
    "You are enough just as you are 💖",
    "Your journey matters ✨",
    "Small steps still move you forward 🌸",
    "You are becoming your best self 💫"
  ];

  const random = affirmations[Math.floor(Math.random() * affirmations.length)];
  const aff = document.getElementById("affirmation");

  if (aff) aff.innerText = random;

  displayEntries();
};
