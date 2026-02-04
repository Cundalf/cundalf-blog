const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

const langData = document.getElementById("lang-data");

if (langData) {
  const currentLang = langData.dataset.current;
  const storedLang = localStorage.getItem("site-lang");
  const browserLang = (navigator.language || "").toLowerCase();
  const autoLang = browserLang.startsWith("en") ? "en" : null;
  const preferredLang = storedLang || autoLang;

  if (preferredLang && preferredLang !== currentLang) {
    const key = `lang${preferredLang.charAt(0).toUpperCase()}${preferredLang.slice(1)}`;
    const target = langData.dataset[key];
    if (target) {
      window.location.replace(target);
    }
  }

  document.querySelectorAll(".lang-switcher__link").forEach((link) => {
    link.addEventListener("click", () => {
      const lang = link.dataset.lang;
      if (lang) {
        localStorage.setItem("site-lang", lang);
      }
    });
  });
}
