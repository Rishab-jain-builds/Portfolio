document.addEventListener("DOMContentLoaded", () => {
  // Accordion Click Logic
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const accordionItem = header.parentElement;
      const content = accordionItem.querySelector(".accordion-content");

      // Toggle current active item
      if (accordionItem.classList.contains("active")) {
        accordionItem.classList.remove("active");
        content.style.maxHeight = null;
      } else {
        // Close other open accordions (Optional: comment out if you want multiple open at once)
        document.querySelectorAll(".accordion-item").forEach(item => {
          item.classList.remove("active");
          item.querySelector(".accordion-content").style.maxHeight = null;
        });

        accordionItem.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
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