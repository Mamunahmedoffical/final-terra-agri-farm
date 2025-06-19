let scrollContaner = document.querySelector(".contaner");
let leftBtn = document.getElementById("leftarrow");
let rightBtn = document.getElementById("rightarrow");

// scrollContaner.addEventListener("wheel", (evt) => {
//   evt.preventDefault();
//   scrollContaner.scrollLeft += evt.deltaY;
//   scrollContaner.style.scrollBehavior = "auto";
// });
leftBtn.addEventListener("click", () => {
  scrollContaner.style.scrollBehavior = "smooth";
  scrollContaner.scrollLeft -= 1145;
});
rightBtn.addEventListener("click", () => {
  scrollContaner.style.scrollBehavior = "smooth";
  scrollContaner.scrollLeft += 1145;
});






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
  