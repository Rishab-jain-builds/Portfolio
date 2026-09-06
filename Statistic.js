    document.addEventListener("DOMContentLoaded", () => {
      // Smooth fade-in animation on load
      const portfolio = document.getElementById("portfolio");
      setTimeout(() => {
        portfolio.style.opacity = "1";
      }, 50);
    });