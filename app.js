// IMPORTS
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


// YOUR FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyBY7EFdQse7HWFFA504j9k_UMY9y9oWSrM",
  authDomain: "journal-5a5c3.firebaseapp.com",
  projectId: "journal-5a5c3",
};

// INIT
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


// 🔐 SIGN UP
window.signup = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const userCred = await createUserWithEmailAndPassword(auth, email, password);

  // CREATE USER IN DATABASE
  await setDoc(doc(db, "users", userCred.user.uid), {
    email: email,
    paid: false
  });

  window.location.href = "journal.html";
};


// 🔐 LOGIN
window.login = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  await signInWithEmailAndPassword(auth, email, password);

  window.location.href = "journal.html";
};


// 🚪 LOGOUT
window.logout = async function () {
  await signOut(auth);
  window.location.href = "index.html";
};


// 🔒 CHECK IF USER PAID
async function checkAccess(user) {
  const docRef = doc(db, "users", user.uid);
  const userDoc = await getDoc(docRef);

  if (!userDoc.exists() || userDoc.data().paid === false) {
    alert("Pay R50 first!");
    window.location.href = "pay.html";
  }
}


// 📓 SAVE JOURNAL
window.saveEntry = async function () {
  const entry = document.getElementById("entry").value;

  await addDoc(collection(db, "journals"), {
    text: entry,
    date: new Date()
  });

  alert("Saved!");
};


// 💳 FAKE PAYMENT
window.fakePayment = async function () {
  const user = auth.currentUser;

  await setDoc(doc(db, "users", user.uid), {
    paid: true
  }, { merge: true });

  alert("Payment done!");
  window.location.href = "journal.html";
};


// ✨ AFFIRMATIONS
const affirmations = [
  "I am enough ❤️",
  "I believe in myself ✨",
  "Today is a fresh start 🌅"
];

const aff = document.getElementById("affirmation");
if (aff) {
  aff.innerText = affirmations[Math.floor(Math.random() * affirmations.length)];
}


// 🔥 RUN CHECK WHEN USER OPENS JOURNAL
onAuthStateChanged(auth, (user) => {
  if (user && window.location.pathname.includes("journal.html")) {
    checkAccess(user);
  }
});
