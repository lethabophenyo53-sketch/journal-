let currentPage = 0;

/* ---------------- SIGN UP ---------------- */
function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  alert("Account created 💖");
}

/* ---------------- LOGIN (ADMIN INCLUDED) ---------------- */
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const savedEmail = localStorage.getItem("email");
  const savedPassword = localStorage.getItem("password");

  // 👑 ADMIN LOGIN
  if (email === "lethabophenyo53@gmail.com" && password === "1234") {
    localStorage.setItem("premium", "true");
    alert("Admin access granted 💎");
    window.location.href = "journal.html";
    return;
  }

  // NORMAL LOGIN
  if (email === savedEmail && password === savedPassword) {
    window.location.href = "journal.html";
  } else {
    alert("Wrong login ❌");
  }
}

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
