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

// The End Of The Year Date To Countdown To

let countDownDate = new Date(
  `Dec 31, ${new Date().getFullYear()} 23:59:59`
).getTime();
let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();
  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;
  // Get Time Units
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".events .days").innerHTML =
    days < 10 ? `0${days}` : days;
  document.querySelector(".events .hours").innerHTML =
    hours < 10 ? `0${hours}` : hours;
  document.querySelector(".events .minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".events .seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

document.querySelector(
  ".events .info .text h1"
).innerHTML = `Tech Masters Event ${new Date().getFullYear()}`;
