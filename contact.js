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