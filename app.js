let pageIndex = 0;
let currentMood = "";

// ===== PAGES =====
function renderPage() {
  const page = document.getElementById("page");

  const affirmations = [
    "You are the main character 💖",
    "Everything is working out for you ✨",
    "You deserve soft love 🌸"
  ];

  const affirmation = affirmations[Math.floor(Math.random() * affirmations.length)];

  const pages = [

    // 🌸 PAGE 1: AFFIRMATION
    `
    <div>
      <h2>✨ Affirmation of the Day</h2>
      <p class="bigAffirmation">${affirmation}</p>
      <textarea id="affNote" placeholder="How does this make you feel?"></textarea>
    </div>
    `,

    // 🌿 PAGE 2: GUIDED JOURNAL
    `
    <div>
      <h2>🌱 Tell me about your day</h2>
      <textarea id="guidedEntry">
Today I felt...

What happened today...

What I learned...

Grateful for...
      </textarea>
    </div>
    `,

    // 💭 PAGE 3: FREE WRITE
    `
    <div>
      <h2>💭 Your Safe Space</h2>
      <textarea id="freeWrite" placeholder="Write anything... no rules 💖"></textarea>
    </div>
    `,

    // ✨ PAGE 4: GLOW UP CHECKLIST
    `
    <div>
      <h2>✨ Glow Up Check</h2>
      <p><input type="checkbox"> Drank water 💧</p>
      <p><input type="checkbox"> Exercised 🏃‍♀️</p>
      <p><input type="checkbox"> Took care of yourself 💆‍♀️</p>
      <p><input type="checkbox"> Positive mindset 💖</p>
    </div>
    `
  ];

  page.innerHTML = pages[pageIndex];
}

// ===== NAVIGATION =====
function nextPage() {
  pageIndex = (pageIndex + 1) % 4;
  renderPage();
}

function prevPage() {
  pageIndex = (pageIndex - 1 + 4) % 4;
  renderPage();
}

// ===== PRIVATE LOCK =====
function checkLock() {
  let password = localStorage.getItem("journalLock");

  if (!password) {
    let newPass = prompt("Create a journal password 🔒");
    localStorage.setItem("journalLock", newPass);
  } else {
    let input = prompt("Enter your journal password 🔐");
    if (input !== password) {
      alert("Wrong password!");
      window.location.href = "index.html";
    }
  }
}

// ===== REMINDER =====
function setReminder() {
  setTimeout(() => {
    alert("💖 Time to journal and check in with yourself");
  }, 10000); // 10 seconds (demo)
}

// ===== LOAD =====
window.onload = function () {
  checkLock();
  renderPage();
  setReminder();

  function toggleMusic() {
  const music = document.getElementById("bgMusic");

  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
};
