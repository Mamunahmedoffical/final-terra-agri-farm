const track = document.getElementById("sliderTrack");
const dots = document.querySelectorAll(".dot");

function moveToSlide(slideIndex) {
  const cardWidth = document.querySelector(".card").offsetWidth;
  const offset = cardWidth * 3.2 * slideIndex;
  track.style.transform = `translateX(-${offset}px)`;

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[slideIndex].classList.add("active");
}




    
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
   