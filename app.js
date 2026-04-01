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

function initJournal() {
  const affirmations = [
    "I am becoming her ✨",
    "I am enough 💖",
    "I glow differently now 🌸",
    "I trust my journey 🌱"
  ];

  const poems = [
    "You are not behind, you are unfolding.",
    "Soft heart, strong future.",
    "You survived what once broke you."
  ];

  const words = ["Glow", "Peace", "Healing", "Confidence"];

  const a = document.getElementById("affirmation");
  const p = document.getElementById("poem");
  const w = document.getElementById("word");

  if (a) a.innerText = random(affirmations);
  if (p) p.innerText = random(poems);
  if (w) w.innerText = random(words);

  showPage();
}

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function vent() {
  const replies = [
    "I hear you 💖",
    "You are safe here 🌸",
    "Let it out, I’m listening ✨",
    "You are not alone 💕"
  ];

  document.getElementById("aiReply").innerText = random(replies);
}

document.addEventListener("change", function (e) {
  if (e.target.id === "imageUpload") {
    const reader = new FileReader();
    reader.onload = () => {
      document.getElementById("preview").src = reader.result;
    };
    reader.readAsDataURL(e.target.files[0]);
  }
});

window.onload = initJournal;
