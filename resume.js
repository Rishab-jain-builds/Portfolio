
document.addEventListener("DOMContentLoaded", () => {
  // Accordion Logic
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const accordionItem = header.parentElement;
      const content = accordionItem.querySelector(".accordion-content");
      const isActive = accordionItem.classList.contains("active");

      // Close all accordions smoothly
      document.querySelectorAll(".accordion-item").forEach((item) => {
        const itemContent = item.querySelector(".accordion-content");
        if (item.classList.contains("active")) {
          // Lock explicit height first so CSS can animate back down to 0
          itemContent.style.maxHeight = itemContent.scrollHeight + "px";
          itemContent.offsetHeight; // Force browser reflow
          item.classList.remove("active");
          itemContent.style.maxHeight = null;
        }
      });

      // Open the clicked accordion if it was not already active
      if (!isActive) {
        accordionItem.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";

        // Release max-height once open animation finishes so content never gets cut off
        const onTransitionEnd = (e) => {
          if (e.propertyName === "max-height" && accordionItem.classList.contains("active")) {
            content.style.maxHeight = "none";
            content.removeEventListener("transitionend", onTransitionEnd);
          }
        };
        content.addEventListener("transitionend", onTransitionEnd);
      }
    });
  });

  // Hamburger Menu Toggle Logic
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const navBar = document.querySelector(".nav-bar");

  if (hamburgerBtn && navBar) {
    hamburgerBtn.addEventListener("click", () => {
      const isActive = hamburgerBtn.classList.toggle("active");
      navBar.classList.toggle("active");
      hamburgerBtn.setAttribute("aria-expanded", isActive);
    });
  }
});