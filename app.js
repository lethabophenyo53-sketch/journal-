let currentMood = "";

// ===== MOOD =====
function setMood(mood) {
  currentMood = mood;
  document.getElementById("selectedMood").innerText = "Mood: " + mood;
}

// ===== SAVE =====
function saveEntry() {
  const text = document.getElementById("entry").value;

  if (!text) return alert("Write something!");

  let entries = JSON.parse(localStorage.getItem("entries")) || [];

  entries.push({
    text,
    mood: currentMood,
    date: new Date().toLocaleDateString()
  });

  localStorage.setItem("entries", JSON.stringify(entries));
  document.getElementById("entry").value = "";

  displayEntries();
  showMoodStats();
}

// ===== DISPLAY =====
function displayEntries() {
  let entries = JSON.parse(localStorage.getItem("entries")) || [];
  let container = document.getElementById("entries");

  if (!container) return;

  container.innerHTML = "";

  entries.slice().reverse().forEach((e, index) => {
    container.innerHTML += `
      <div class="entry-card">
        <p><strong>${e.date}</strong> ${e.mood || ""}</p>
        <p>${e.text}</p>
        <button onclick="deleteEntry(${index})">Delete</button>
      </div>
    `;
  });
}

// ===== DELETE =====
function deleteEntry(index) {
  let entries = JSON.parse(localStorage.getItem("entries")) || [];
  entries.splice(entries.length - 1 - index, 1);
  localStorage.setItem("entries", JSON.stringify(entries));
  displayEntries();
  showMoodStats();
}

// ===== MOOD STATS =====
function showMoodStats() {
  let entries = JSON.parse(localStorage.getItem("entries")) || [];
  let stats = {};

  entries.forEach(e => {
    if (!e.mood) return;
    stats[e.mood] = (stats[e.mood] || 0) + 1;
  });

  let output = "";
  for (let mood in stats) {
    output += `<p>${mood}: ${stats[mood]}</p>`;
  }

  document.getElementById("moodStats").innerHTML = output;
}

// ===== DARK MODE =====
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// ===== DAILY EXPERIENCE =====
window.onload = function () {

  const affirmations = [
    "You are growing every day 🌱",
    "You’ve made it this far 💖",
    "Keep going, you're doing great ✨",
    "Your feelings are valid 🌸"
  ];

  const prompts = [
    "What made you smile today?",
    "What challenged you today?",
    "What are you grateful for?",
    "What did you learn today?"
  ];

  document.getElementById("affirmation").innerText =
    affirmations[Math.floor(Math.random() * affirmations.length)];

  document.getElementById("prompt").innerText =
    "Prompt: " + prompts[Math.floor(Math.random() * prompts.length)];

  displayEntries();
  showMoodStats();
};
