// Animate Width On Scrolling progress
const ourSkills = document.querySelector("#our-skills");
const progress = document.querySelectorAll(".our-skills .prog > span");
window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  if (
    scrollY >= ourSkills.offsetTop &&
    scrollY < ourSkills.offsetHeight + ourSkills.offsetTop
  ) {
    progress.forEach((e) => {
      e.style.width = `${e.dataset.width}`;
    });
  }
});

// Animate Width On Scrolling Stats
const stats = document.querySelector("#stats");
const pCount = document.querySelectorAll(
  " .stats .container .cards .card p:first-of-type"
);
let started = true;
window.addEventListener("scroll", function () {
  if (window.scrollY >= stats.offsetTop) {
    if (started) {
      pCount.forEach((e) => startCount(e));
    }
    started = false;
  }
});
function startCount(e) {
  let count = e.dataset.count;
  let setCount = setInterval(() => {
    e.textContent++;
    if (e.textContent == count) {
      clearInterval(setCount);
    }
  }, 2000 / count);
}
