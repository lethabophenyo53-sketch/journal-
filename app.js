let currentPage = 0;

/* ---------------- PAGES ---------------- */
function showPage() {
  const pages = document.querySelectorAll(".page");

  pages.forEach((p, i) => {
    p.classList.remove("active");
    if (i === currentPage) {
      p.classList.add("active");
    }
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

/* ---------------- LOGIN ---------------- */
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (
    email === localStorage.getItem("email") &&
    password === localStorage.getItem("password")
  ) {
    window.location.href = "journal.html";
  } else {
    alert("Wrong login ❌");
  }
}

/* ---------------- AFFIRMATION ---------------- */
function initJournal() {
  const list = [
    "You are becoming her 💖",
    "You are safe even in silence 🌸",
    "Your healing is valid 💕",
    "You are doing better than you think ✨"
  ];

  const el = document.getElementById("affirmation");

  if (el) {
    el.innerText = list[Math.floor(Math.random() * list.length)];
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

    callback: function(response) {
      alert("Payment successful 💎");

      localStorage.setItem("premium", "true");

      window.location.href = "journal.html";
    },

    onClose: function() {
      alert("Payment cancelled");
    }
  });

  handler.openIframe();
}
