const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".navbar");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Optional: Handle dropdowns on mobile for better UX
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (e) => {
    // Only handle this on mobile
    if (window.innerWidth <= 768) {
      e.preventDefault();
      dropdown.classList.toggle("active");
    }
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (window.innerWidth <= 768) {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove("active");
      
      // Also close any open dropdowns
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("active");
      });
    }
  }
});