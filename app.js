let currentMood = "";

// LOGIN SYSTEM
function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);

  alert("Account created 💖");
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (
    email === localStorage.getItem("userEmail") &&
    password === localStorage.getItem("userPassword")
  ) {
    window.location.href = "journal.html";
  } else {
    alert("Wrong details");
  }
}

// MOOD
function setMood(mood) {
  currentMood = mood;
  document.getElementById("selectedMood").innerText = "Mood: " + mood;
}

// SAVE ENTRY
function saveEntry() {
  const text = document.getElementById("entry").value;

  let entries = JSON.parse(localStorage.getItem("entries")) || [];

  entries.push({
    text,
    mood: currentMood,
    date: new Date().toLocaleDateString()
  });

  localStorage.setItem("entries", JSON.stringify(entries));

  displayEntries();
}

// DISPLAY
function displayEntries() {
  let entries = JSON.parse(localStorage.getItem("entries")) || [];
  let container = document.getElementById("entries");

  if (!container) return;

  container.innerHTML = "";

  entries.reverse().forEach(e => {
    container.innerHTML += `
      <div class="entry-card">
        <p>${e.mood}</p>
        <p>${e.text}</p>
        <small>${e.date}</small>
      </div>
    `;
  });
}

// LOGOUT
function logout() {
  window.location.href = "index.html";
}

// DAILY VIBE
window.onload = function () {

  const bigMessages = [
    "You are the main character 💖",
    "Today is your glow-up day ✨",
    "Romanticize your life 🌸",
    "Soft life. Soft growth 🌷"
  ];

  const affirmations = [
    "You are doing amazing 💕",
    "Keep going ✨",
    "You matter 💖"
  ];

  const prompts = [
    "What made you smile today?",
    "What are you grateful for?",
    "What did you learn today?"
  ];

  if (document.getElementById("bigMessage"))
    document.getElementById("bigMessage").innerText =
      bigMessages[Math.floor(Math.random() * bigMessages.length)];

  if (document.getElementById("affirmation"))
    document.getElementById("affirmation").innerText =
      affirmations[Math.floor(Math.random() * affirmations.length)];

  if (document.getElementById("prompt"))
    document.getElementById("prompt").innerText =
      prompts[Math.floor(Math.random() * prompts.length)];

  displayEntries();
};
