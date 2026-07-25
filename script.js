document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".social-card, .about, .final-cta");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(18px)";
    item.style.transition = "opacity .65s ease, transform .65s ease";
    observer.observe(item);
  });

  const style = document.createElement("style");
  style.textContent = `
    .visible { opacity: 1 !important; transform: translateY(0) !important; }
  `;
  document.head.appendChild(style);
});
