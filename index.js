const mobileMenuButton = document.querySelector(".mobile-menu-button");
const mobileNav = document.querySelector(".mobile-nav");

function toggleMobileMenu() {
  mobileNav.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
}

mobileMenuButton.addEventListener("click", toggleMobileMenu);

const mobileNavLinks = document.querySelectorAll(".mobile-nav a");
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", toggleMobileMenu);
});
