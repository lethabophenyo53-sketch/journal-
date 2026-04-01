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

/* INIT */
window.onload = function () {
  showPage();
};

/* VENT AI */
function vent() {
  let input = document.getElementById("ventBox").value.toLowerCase();
  let reply = "";

  if (input.includes("sad")) reply = "I’m here for you 💔";
  else if (input.includes("stress")) reply = "Breathe. You’re safe 🌸";
  else if (input.includes("tired")) reply = "Rest. You deserve it 💕";
  else reply = "I hear you 💖 keep going";

  document.getElementById("aiReply").innerText = reply;
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
