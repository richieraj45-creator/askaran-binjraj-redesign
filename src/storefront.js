/* Askaran Binjraj — Storefront (plain JS: splash, slider, reveals, nav) */
(function () {
  "use strict";

  /* ---------- Splash screen ---------- */
  document.body.classList.add("lock");
  var splash = document.getElementById("splash");
  if (splash) {
    window.setTimeout(function () {
      splash.classList.add("done");
      document.body.classList.remove("lock");
      window.setTimeout(function () {
        if (splash.parentNode) splash.parentNode.removeChild(splash);
      }, 950);
    }, 4400);
  } else {
    document.body.classList.remove("lock");
  }

  /* ---------- Header shadow ---------- */
  var header = document.getElementById("site-header");
  window.addEventListener("scroll", function () {
    if (header) header.classList.toggle("scrolled", window.scrollY > 12);
  }, { passive: true });

  /* ---------- Mobile nav ---------- */
  var burger = document.getElementById("burger");
  var mobileNav = document.getElementById("mobile-nav");
  if (burger && mobileNav) {
    burger.addEventListener("click", function () {
      mobileNav.classList.toggle("open");
    });
    mobileNav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { mobileNav.classList.remove("open"); });
    });
  }

  /* ---------- Hero slider ---------- */
  var slides = Array.prototype.slice.call(document.querySelectorAll(".sf-slide"));
  var dotsWrap = document.getElementById("hero-dots");
  var counterEl = document.getElementById("hero-counter");
  var eyebrowEl = document.getElementById("hero-eyebrow-text");
  var titleEl = document.getElementById("hero-title");
  var subEl = document.getElementById("hero-sub");
  var textWrap = document.getElementById("hero-text");
  var current = 0;
  var timer = null;

  function pad(n) { return (n < 9 ? "0" : "") + (n + 1); }

  function render(i) {
    current = (i + slides.length) % slides.length;
    slides.forEach(function (s, idx) { s.classList.toggle("active", idx === current); });
    if (dotsWrap) {
      Array.prototype.forEach.call(dotsWrap.children, function (d, idx) {
        d.classList.toggle("active", idx === current);
      });
    }
    if (counterEl) counterEl.innerHTML = pad(current) + "<small>/ " + pad(slides.length - 1) + "</small>";
  }

  function startAuto() {
    window.clearInterval(timer);
    timer = window.setInterval(function () { render(current + 1); }, 6000);
  }

  if (slides.length) {
    if (dotsWrap) {
      slides.forEach(function (_, idx) {
        var b = document.createElement("button");
        b.type = "button";
        b.addEventListener("click", function () { render(idx); startAuto(); });
        dotsWrap.appendChild(b);
      });
    }
    render(0);
    startAuto();
  }

  /* ---------- Scroll reveals ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }
})();