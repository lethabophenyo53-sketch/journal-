let currentPage = 0;

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

/* LOGIN */
function signup() {
  localStorage.setItem("email", email.value);
  localStorage.setItem("password", password.value);
  alert("Account created 💖");
}

function login() {
  if (
    email.value === localStorage.getItem("email") &&
    password.value === localStorage.getItem("password")
  ) {
    window.location.href = "journal.html";
  } else {
    alert("Wrong login");
  }
}

/* AFFIRMATION */
function initJournal() {
  const list = [
    "You are becoming her.",
    "You are safe even in silence.",
    "Your healing is valid.",
    "You are doing better than you think."
  ];

  document.getElementById("affirmation").innerText =
    list[Math.floor(Math.random() * list.length)];

  function payNow() {
  let handler = PaystackPop.setup({
    key: "YOUR_PUBLIC_KEY_HERE", // from Paystack dashboard
    email: localStorage.getItem("email"),
    amount: 5000, // 50.00 ZAR (Paystack uses kobo-like format)
    currency: "ZAR",

    callback: function(response) {
      alert("Payment successful 💖");

      // unlock premium features
      localStorage.setItem("premium", "true");

      window.location.href = "journal.html";
    },

    onClose: function() {
      alert("Payment cancelled");
    }
  });

  handler.openIframe();
}
}
