document.addEventListener("DOMContentLoaded", () => {

      // Smooth fade-in animation
      const portfolio = document.getElementById("portfolio");
      setTimeout(() => {
        portfolio.style.opacity = "1";
      }, 50);
    });

    const hamburgerBtn = document.getElementById('hamburgerBtn');
const navBar = document.querySelector('.nav-bar');

if (hamburgerBtn && navBar) {
  hamburgerBtn.addEventListener('click', () => {
    const isActive = hamburgerBtn.classList.toggle('active');
    navBar.classList.toggle('active');
    hamburgerBtn.setAttribute('aria-expanded', isActive);
  });
}

const phrases = [" Web Developer", " Aspiring Data Scientist", " Future ML Enthusiast", " Programmer", " Future AI Engineer"];
  const typedEl = document.getElementById('typed-text');

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const TYPE_SPEED = 80;
  const DELETE_SPEED = 40;
  const PAUSE_AFTER_TYPE = 1400;
  const PAUSE_AFTER_DELETE = 300;

  function tick() {
    const currentPhrase = phrases[phraseIndex];

    if (!deleting) {
      charIndex++;
      typedEl.textContent = currentPhrase.slice(0, charIndex);

      if (charIndex === currentPhrase.length) {
        deleting = true;
        setTimeout(tick, PAUSE_AFTER_TYPE);
        return;
      }
      setTimeout(tick, TYPE_SPEED);
    } else {
      charIndex--;
      typedEl.textContent = currentPhrase.slice(0, charIndex);

      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(tick, PAUSE_AFTER_DELETE);
        return;
      }
      setTimeout(tick, DELETE_SPEED);
    }
  }

  tick();

  window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const portfolio = document.getElementById("portfolio");

  // Keep the loader visible for at least 1 second total
  const minDisplayTime = 1000;
  const wait = Math.max(0, minDisplayTime - performance.now());

  setTimeout(() => {
    loader.classList.add("hidden");
    portfolio.style.opacity = "1";
  }, wait);
});