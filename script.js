    document.addEventListener("DOMContentLoaded", () => {
      // Image fallback if local profile.jpg is missing
      const img = document.getElementById("profilePic");
      
      img.onerror = () => {
        img.src = "https://via.placeholder.com/180x220?text=Profile+Photo";
      };

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