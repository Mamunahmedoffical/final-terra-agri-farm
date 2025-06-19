const hamburger = document.getElementById("hamberger");
const mobileNav = document.getElementById("mobilenav");
const menuIcon = document.getElementById("menuIcon");

let isOpen = false;

hamburger.addEventListener("click", () => {
  isOpen = !isOpen;

  if (isOpen) {
    mobileNav.style.left = "0%";
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
    document.body.style.overflow = "hidden";
  } else {
    mobileNav.style.left = "-100%";
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
    document.body.style.overflow = "auto";
  }
});
