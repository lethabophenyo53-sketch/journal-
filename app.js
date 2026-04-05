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

/* 📅 DAILY SAVE SYSTEM */
const today = new Date().toISOString().split("T")[0];

function saveData() {
  const data = {
    gratitude: document.getElementById("gratitude")?.value,
    affirm: document.getElementById("affirm")?.value,
    notes: document.getElementById("notes")?.value,
    story: document.getElementById("story")?.value,
    closing: document.getElementById("closing")?.value
  };

  localStorage.setItem("journal-" + today, JSON.stringify(data));
}

function loadData() {
  const data = JSON.parse(localStorage.getItem("journal-" + today));

  if (!data) return;

  document.getElementById("gratitude").value = data.gratitude || "";
  document.getElementById("affirm").value = data.affirm || "";
  document.getElementById("notes").value = data.notes || "";
  document.getElementById("story").value = data.story || "";
  document.getElementById("closing").value = data.closing || "";
}

/* AUTO SAVE */
setInterval(saveData, 2000);

document.addEventListener("DOMContentLoaded", () => {
  showPage();
  loadData();
});

/* 🔐 LOGIN SYSTEM */
function signup() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  localStorage.setItem(email, pass);
  alert("Account created!");
}

function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (email === "lethabophenyo53@gmail.com") {
    window.location.href = "admin.html";
    return;
  }

  const saved = localStorage.getItem(email);

  if (saved === pass) {
    if (localStorage.getItem("paid-" + email) === "true") {
      window.location.href = "journal.html";
    } else {
      alert("Please upgrade to premium (R50)");
    }
  } else {
    alert("Invalid login");
  }
}

/* 💳 PAYSTACK */
function payNow() {
  let handler = PaystackPop.setup({
    key: 'pk_test_xxxx',
    email: document.getElementById("email").value,
    amount: 5000,
    callback: function () {
      localStorage.setItem(
        "paid-" + document.getElementById("email").value,
        "true"
      );
      alert("Payment successful!");
    }
  });

  handler.openIframe();
}
