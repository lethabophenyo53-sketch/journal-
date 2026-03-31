// ===== FIREBASE CONFIG =====
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// 🔴 PASTE YOUR FIREBASE CONFIG HERE
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ===== AUTH =====
window.signup = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Account created!");
  } catch (err) {
    alert(err.message);
  }
};

window.login = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "journal.html";
  } catch (err) {
    alert(err.message);
  }
};

window.logout = function () {
  signOut(auth);
  window.location.href = "index.html";
};

// ===== SAVE ENTRY (CLOUD) =====
window.saveEntry = async function () {
  const text = document.getElementById("entry").value;

  await addDoc(collection(db, "entries"), {
    text,
    date: new Date().toLocaleDateString()
  });

  document.getElementById("entry").value = "";
  loadEntries();
  updateStreak();
};

// ===== LOAD ENTRIES =====
async function loadEntries() {
  const querySnapshot = await getDocs(collection(db, "entries"));
  const container = document.getElementById("entries");

  if (!container) return;

  container.innerHTML = "";

  querySnapshot.forEach((docSnap) => {
    const data = docSnap.data();

    container.innerHTML += `
      <div class="entry-card">
        <p>${data.text}</p>
        <small>${data.date}</small>
      </div>
    `;
  });
}

// ===== STREAK SYSTEM =====
function updateStreak() {
  let lastDate = localStorage.getItem("lastEntryDate");
  let today = new Date().toDateString();

  let streak = parseInt(localStorage.getItem("streak")) || 0;

  if (lastDate !== today) {
    streak++;
    localStorage.setItem("streak", streak);
    localStorage.setItem("lastEntryDate", today);
  }

  document.getElementById("streak").innerText = "🔥 Streak: " + streak;
}

// ===== LOAD PAGE =====
window.onload = function () {
  loadEntries();
  
  const bigMessages = [
  "Today is YOUR glow-up day ✨",
  "Romanticize your life today 💖",
  "You are the main character 🌸",
  "Soft life. Soft thoughts. Soft growth 🌷"
];

const msg = document.getElementById("bigMessage");
if (msg) {
  msg.innerText = bigMessages[Math.floor(Math.random() * bigMessages.length)];
}

  const affirmations = [
    "You’re building your future 🌱",
    "Keep showing up 💖",
    "Your growth matters ✨"
  ];

  const prompts = [
    "What made you proud today?",
    "What did you overcome?",
    "What are you grateful for?"
  ];

  const aff = document.getElementById("affirmation");
  const pr = document.getElementById("prompt");

  if (aff) aff.innerText = affirmations[Math.random() * affirmations.length | 0];
  if (pr) pr.innerText = prompts[Math.random() * prompts.length | 0];

  updateStreak();
};
