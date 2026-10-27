const checklist = [...document.querySelectorAll("[data-check]")];
const progress = document.querySelector("#check-progress");

function updateProgress() {
  const checked = checklist.filter((item) => item.checked).length;
  progress.textContent = `${checked} / ${checklist.length}`;
}

checklist.forEach((item) => {
  const key = `jeoldusan-2026-${item.dataset.check}`;
  item.checked = localStorage.getItem(key) === "1";
  item.addEventListener("change", () => {
    localStorage.setItem(key, item.checked ? "1" : "0");
    updateProgress();
  });
});

updateProgress();
document.querySelector("[data-print]")?.addEventListener("click", () => window.print());

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const reveals = document.querySelectorAll(".reveal");

if (reducedMotion || !("IntersectionObserver" in window)) {
  reveals.forEach((item) => item.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  reveals.forEach((item) => observer.observe(item));
}
