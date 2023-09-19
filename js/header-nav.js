const closeBtn = document.querySelector(".close-btn");
const header = document.querySelector(".header");
const mobileMenu = document.querySelector(".mobile-menu");
const menuIcon = document.querySelector(".menu-icon");

// Function to show the mobile menu smoothly
function showMobileMenu() {
  mobileMenu.style.display = "block";
  setTimeout(() => {
    mobileMenu.classList.add("mobile-menu-open");
  }, 300);
}

// Function to hide the mobile menu smoothly
function hideMobileMenu() {
  mobileMenu.classList.remove("mobile-menu-open");
  setTimeout(() => {
    mobileMenu.style.display = "none";
  }, 300);
}

menuIcon.addEventListener("click", showMobileMenu);

closeBtn.addEventListener("click", hideMobileMenu);
