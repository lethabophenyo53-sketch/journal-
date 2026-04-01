let currentPage = 0;

/* ---------------- BOOK SYSTEM ---------------- */
function showPage() {
  const pages = document.querySelectorAll(".page");

  pages.forEach((p, i) => {
    p.classList.remove("active");
    if (i === currentPage) p.classList.add("active");
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

/* ---------------- SIGNUP ---------------- */
function signup() {
  localStorage.setItem("email", document.getElementById("email").value);
  localStorage.setItem("password", document.getElementById("password").value);

  alert("Account created 💖");
}

/* ---------------- LOGIN + ADMIN ---------------- */
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const savedEmail = localStorage.getItem("email");
  const savedPassword = localStorage.getItem("password");

  // 👑 ADMIN
  if (email === "lethabophenyo53@gmail.com" && password === "1234") {
    localStorage.setItem("premium", "true");
    window.location.href = "journal.html";
    return;
  }

  // NORMAL USER
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
    amount: 5000,
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

/* ---------------- AFFIRMATIONS ---------------- */
function initJournal() {
  const list = [
    "You are becoming her 💖",
    "You are safe 🌸",
    "Your feelings are valid 💕",
    "You survived today ✨"
  ];

  let el = document.getElementById("affirmation");
  if (el) el.innerText = list[Math.floor(Math.random() * list.length)];
}

/* ---------------- VENT AI ---------------- */
function vent() {
  let replies = [
    "I hear you 💔",
    "You are safe here 🌸",
    "Let it all out",
    "You are not alone"
  ];

  alert(replies[Math.floor(Math.random() * replies.length)]);
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
