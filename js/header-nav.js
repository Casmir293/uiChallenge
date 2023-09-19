const closeBtn = document.querySelector(".close-btn");
const header = document.querySelector(".header");
const mobileMenu = document.querySelector(".mobile-menu");
const menuIcon = document.querySelector(".menu-icon");

// Function to hide the header and show the mobile menu
function showMobileMenu() {
  header.style.display = "none";
  mobileMenu.style.display = "block";
}

// Function to show the header and hide the mobile menu
function hideMobileMenu() {
  header.style.display = "flex";
  mobileMenu.style.display = "none";
}

// Event listener for the menuIcon click
menuIcon.addEventListener("click", showMobileMenu);

// Event listener for the closeBtn click
closeBtn.addEventListener("click", hideMobileMenu);
