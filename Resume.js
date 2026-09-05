    document.addEventListener("DOMContentLoaded", () => {
      // Smooth fade-in animation on load
      const portfolio = document.getElementById("portfolio");
      setTimeout(() => {
        portfolio.style.opacity = "1";
      }, 50);

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