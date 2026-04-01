let currentPage = 0;

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

/* STORY */
function initJournal() {
  const stories = [
    "Even bad days are part of becoming who you're meant to be.",
    "Healing is not linear. You are still growing.",
    "You are not behind. You are becoming.",
    "Soft days, hard days — all are progress."
  ];

  document.getElementById("story").innerText =
    stories[Math.floor(Math.random() * stories.length)];

  const affirmations = [
    "You are becoming her 💖",
    "You are safe 🌸",
    "You are enough ✨",
    "You survived today 💕"
  ];

  document.getElementById("affirmation").innerText =
    affirmations[Math.floor(Math.random() * affirmations.length)];

  const poems = [
    "And even on heavy days, you still grew.",
    "Soft girl, strong heart, healing soul.",
    "Tomorrow is still yours to become.",
    "You are not lost, you are unfolding."
  ];

  document.getElementById("poem").innerText =
    poems[Math.floor(Math.random() * poems.length)];
}

/* VENT AI */
function vent() {
  let replies = [
    "I hear you. That sounds heavy 💔",
    "You are safe here 🌸",
    "Let it out. You are not alone.",
    "Your feelings are valid."
  ];

  alert(replies[Math.floor(Math.random() * replies.length)]);
}

/* IMAGE */
document.addEventListener("change", function (e) {
  if (e.target.id === "imageUpload") {
    let reader = new FileReader();
    reader.onload = function () {
      document.getElementById("preview").src = reader.result;
    };
    reader.readAsDataURL(e.target.files[0]);
  }
});
