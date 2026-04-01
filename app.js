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
    "Even on your hardest days, you are still growing.",
    "You are not behind. You are becoming.",
    "Healing is slow, but it is happening.",
    "Your story is still unfolding beautifully."
  ];

  const affirmations = [
    "You are enough 💖",
    "You are safe 🌸",
    "You are becoming your best self ✨",
    "You survived today 💕"
  ];

  const poems = [
    "And even in silence, you were healing.",
    "Soft heart, strong soul, growing daily.",
    "You are not lost — you are unfolding.",
    "Tomorrow is a new page for you."
  ];

  document.getElementById("story").innerText =
    stories[Math.floor(Math.random() * stories.length)];

  document.getElementById("affirmation").innerText =
    affirmations[Math.floor(Math.random() * affirmations.length)];

  document.getElementById("poem").innerText =
    poems[Math.floor(Math.random() * poems.length)];
}
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

function generateMotivation() {
  const boosts = [
    "You are not behind — you are building your story at your own pace 💖",
    "Everything you are going through is shaping a stronger version of you 🌱",
    "Even if today is hard, you are still growing ✨",
    "You are allowed to restart as many times as you need 💕",
    "Your life is not falling apart — it's falling into place 🌸"
  ];

  document.getElementById("motivationBoost").innerText =
    boosts[Math.floor(Math.random() * boosts.length)];
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
document.getElementById("poem").innerText = poems[random];
