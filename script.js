document.addEventListener("DOMContentLoaded", function () {
    const courseCards = document.querySelectorAll(".course-card");
  
    function fadeInOnScroll() {
      courseCards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (cardTop < windowHeight - 50) {
          card.classList.add("visible");
        }
      });
    }
  
    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Trigger on load in case some elements are already in view
  });


//   features boxes------------------------

document.addEventListener("DOMContentLoaded", function () {
    const featureBoxes = document.querySelectorAll(".feature-box");

    function animateOnScroll() {
        featureBoxes.forEach((box) => {
            const boxTop = box.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (boxTop < windowHeight - 50) {
                box.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // Trigger on load in case elements are already in view
});


// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});


// Scroll Animations
document.addEventListener("DOMContentLoaded", () => {
  const scrollElements = document.querySelectorAll(".scroll-animation");

  const scrollHandler = () => {
    scrollElements.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
        el.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", scrollHandler);
  scrollHandler(); // Run initially
});

