let currentPage = 0;

function showPage() {
  const pages = document.querySelectorAll(".page");

  pages.forEach((p, i) => {
    p.classList.remove("active", "prev");

    if (i === currentPage) p.classList.add("active");
    if (i === currentPage - 1) p.classList.add("prev");
  });
}

function nextPage() {
  const pages = document.querySelectorAll(".page");
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage();
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    showPage();
  }
}

/* ---------------- SIGN UP ---------------- */
function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  alert("Account created 💖");
}

/* ---------------- LOGIN (WITH ADMIN) ---------------- */
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const savedEmail = localStorage.getItem("email");
  const savedPassword = localStorage.getItem("password");

  // 👑 ADMIN LOGIN (YOU)
  if (email === "lethabophenyo53@gmail.com" && password === "1234") {
    localStorage.setItem("premium", "true");
    alert("Admin access granted 💎");
    window.location.href = "journal.html";
    return;
  }

  // 👤 NORMAL USER
  if (email === savedEmail && password === savedPassword) {
    window.location.href = "journal.html";
  } else {
    alert("Wrong login ❌");
  }
}

/* ---------------- PAYSTACK ---------------- */
function payNow() {
  let email = localStorage.getItem("email");

  let handler = PaystackPop.setup({
    key: "YOUR_PUBLIC_KEY_HERE",
    email: email,
    amount: 5000, // R50
    currency: "ZAR",

    callback: function () {
      alert("Payment successful 💎");
      localStorage.setItem("premium", "true");
      window.location.href = "journal.html";
    },

    onClose: function () {
      alert("Payment cancelled");
    }
  });

  handler.openIframe();
}

/* ---------------- JOURNAL INIT ---------------- */
function initJournal() {
  const stories = [
    "Even on your hardest days, you are still growing.",
    "You are not behind. You are becoming.",
    "Healing takes time, and that's okay.",
    "Your story is still being written beautifully."
  ];

  const affirmations = [
    "You are enough 💖",
    "You are safe 🌸",
    "You are becoming her ✨",
    "You survived today 💕"
  ];

  const poems = [
    "And even in silence, you were healing.",
    "Soft heart, strong soul, growing daily.",
    "You are not lost — you are unfolding.",
    "Tomorrow is your new beginning."
  ];

  if (document.getElementById("story")) {
    document.getElementById("story").innerText =
      stories[Math.floor(Math.random() * stories.length)];
  }

  if (document.getElementById("affirmation")) {
    document.getElementById("affirmation").innerText =
      affirmations[Math.floor(Math.random() * affirmations.length)];
  }

  if (document.getElementById("poem")) {
    document.getElementById("poem").innerText =
      poems[Math.floor(Math.random() * poems.length)];
  }
}

/* ---------------- VENT ---------------- */
function vent() {
  const replies = [
    "I hear you 💔",
    "You are safe here 🌸",
    "Let it all out 💕",
    "You are not alone ✨"
  ];

  alert(replies[Math.floor(Math.random() * replies.length)]);
}

/* ---------------- MOTIVATION BOOST ---------------- */
function generateMotivation() {
  const boosts = [
    "You are growing every day 💖",
    "You are stronger than you think 🌱",
    "Your story matters ✨",
    "You are becoming your best self 💕"
  ];

  document.getElementById("motivationBoost").innerText =
    boosts[Math.floor(Math.random() * boosts.length)];
}

/* ---------------- IMAGE UPLOAD ---------------- */
document.addEventListener("change", function (e) {
  if (e.target.id === "imageUpload") {
    let reader = new FileReader();
    reader.onload = function () {
      document.getElementById("preview").src = reader.result;
    };
    reader.readAsDataURL(e.target.files[0]);
  }
});
