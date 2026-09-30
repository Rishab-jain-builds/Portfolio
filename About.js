document.addEventListener("DOMContentLoaded", () => {
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

const phrases = ["Web Developer", "Data Scientist", "ML Enthusiast", "Writer"];
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

  if (typedEl) tick();   // only run the typing effect on pages that have it

/* ===== Certificates / Achievements slider (3 at a time) ===== */
(function () {
  const slider = document.getElementById('certSlider');
  if (!slider) return;                       // page has no slider

  const AUTOPLAY_MS = 3000;                  // set to 0 to turn autoplay off
  const track = slider.querySelector('.cert-track');
  const dotsEl = slider.querySelector('.cert-dots');
  const slides = track.children;
  let index = 0, timer = null;

  const perView = () =>
    parseInt(getComputedStyle(slider).getPropertyValue('--cert-show')) || 3;
  const maxIndex = () => Math.max(0, slides.length - perView());

  function render() {
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.style.transform = `translateX(${-index * (slides[0].offsetWidth + gap)}px)`;

    dotsEl.innerHTML = '';
    for (let i = 0; i <= maxIndex(); i++) {
      const dot = document.createElement('button');
      dot.className = 'cert-dot' + (i === index ? ' on' : '');
      dot.setAttribute('aria-label', 'Go to position ' + (i + 1));
      dot.addEventListener('click', () => { go(i); restart(); });
      dotsEl.appendChild(dot);
    }
  }

  function go(i) {
    const m = maxIndex();
    index = i > m ? 0 : i < 0 ? m : i;       // wrap around at both ends
    render();
  }

  function restart() {
    clearInterval(timer);
    if (AUTOPLAY_MS) timer = setInterval(() => go(index + 1), AUTOPLAY_MS);
  }

  slider.querySelector('.cert-next').addEventListener('click', () => { go(index + 1); restart(); });
  slider.querySelector('.cert-prev').addEventListener('click', () => { go(index - 1); restart(); });

  // Pause on hover
  slider.addEventListener('mouseenter', () => clearInterval(timer));
  slider.addEventListener('mouseleave', restart);

  // Swipe support for touch screens
  let startX = null;
  slider.addEventListener('pointerdown', e => { startX = e.clientX; });
  slider.addEventListener('pointerup', e => {
    if (startX === null) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 40) { go(index + (dx < 0 ? 1 : -1)); restart(); }
    startX = null;
  });

  window.addEventListener('resize', () => { index = Math.min(index, maxIndex()); render(); });

  render();
  restart();
})();
