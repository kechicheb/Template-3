// Animate Width On Scrolling progress
const section = document.querySelector("#our-skills");
const progress = document.querySelectorAll(
  ".our-skills .prog > span"
);
console.log(progress);
window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  if (scrollY >= section.offsetTop && scrollY < section.offsetHeight + section.offsetTop) {
    progress.forEach((e) => {
      e.style.width = `${e.dataset.width}`;
    });
  }
});
