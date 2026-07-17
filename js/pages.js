/* GSN Pages — Shared animations & interactions */
document.body.classList.add("js-loaded");

// ---------- Intersection Observer (scroll reveal) ----------
(function initReveal() {
  // All element types that need reveal — old + new classes
  const selector = [
    ".img-card",
    ".bento-cell",
    ".tl-item",
    ".faq-item",
    ".region-card",
    ".resource-card",
    ".info-card",
    ".stat-item",
    ".legal-section",
    ".reveal"
  ].join(", ");

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });

  document.querySelectorAll(selector).forEach((el, i) => {
    // Stagger siblings of the same type within the same parent
    const cls = el.classList[0];
    const siblings = [...el.parentElement.children].filter(c => c.classList.contains(cls));
    const idx = siblings.indexOf(el);
    el.style.transitionDelay = (idx * 0.08) + "s";
    io.observe(el);
  });

  // Safety fallback: if IntersectionObserver never fires (e.g. hidden iframe),
  // reveal everything after 1.5 seconds
  setTimeout(() => {
    document.querySelectorAll(selector).forEach(el => el.classList.add("visible"));
  }, 1500);
})();

// ---------- FAQ Accordion ----------
(function initFaq() {
  document.querySelectorAll(".faq-q").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const isOpen = item.classList.contains("open");
      // close all
      document.querySelectorAll(".faq-item.open").forEach(o => o.classList.remove("open"));
      if (!isOpen) item.classList.add("open");
    });
  });
})();

// ---------- Animated number counter ----------
(function initCounters() {
  const nums = document.querySelectorAll(".stat-num[data-target]");
  if (!nums.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      const el = e.target;
      const target = parseFloat(el.dataset.target);
      const suffix = el.dataset.suffix || "";
      const prefix = el.dataset.prefix || "";
      const duration = 1800;
      const start = performance.now();

      function tick(now) {
        const elapsed = now - start;
        const pct = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - pct, 3);
        const val = target * ease;
        el.textContent = prefix + (Number.isInteger(target) ? Math.round(val) : val.toFixed(1)) + suffix;
        if (pct < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.5 });

  nums.forEach(el => io.observe(el));
})();
