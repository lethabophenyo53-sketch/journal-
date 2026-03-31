// 🔥 IMPORT FIREBASE (IMPORTANT)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


// 🔑 YOUR FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyBY7EFdQse7HWFFA504j9k_UMY9y9oWSrM",
  authDomain: "journal-5a5c3.firebaseapp.com",
  projectId: "journal-5a5c3",
  storageBucket: "journal-5a5c3.firebasestorage.app",
  messagingSenderId: "617448101718",
  appId: "1:617448101718:web:2d5be55fffa49f65efa8f7"
};


// 🚀 INITIALIZE
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


// 🔐 SIGN UP
window.signup = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Account created!");
    window.location.href = "journal.html";
  } catch (error) {
    alert(error.message);
  }
};


// 🔐 LOGIN
window.login = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "journal.html";
  } catch (error) {
    alert(error.message);
  }
};


// 🚪 LOGOUT
window.logout = async function () {
  await signOut(auth);
  window.location.href = "index.html";
};


// 📓 SAVE JOURNAL ENTRY
window.saveEntry = async function () {
  const entry = document.getElementById("entry").value;

  try {
    await addDoc(collection(db, "journals"), {
      text: entry,
      date: new Date()
    });

    alert("Saved!");
  } catch (error) {
    alert(error.message);
  }
};


// ✨ DAILY AFFIRMATIONS
const affirmations = [
  "I am enough ❤️",
  "I believe in myself ✨",
  "Today is a fresh start 🌅",
  "I am growing every day 🌱"
];

const affEl = document.getElementById("affirmation");
if (affEl) {
  affEl.innerText =
    affirmations[Math.floor(Math.random() * affirmations.length)];
}
