/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

// Toggle menu on hamburger click
hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]"); // Adjust the position
    hamburger.classList.toggle("ri-close-line"); // Change icon
    hamburger.classList.toggle("ri-menu-4-line"); // Reset icon
});

// Close menu on nav-link click
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left-[0]");
        hamburger.classList.toggle("ri-close-line");
        hamburger.classList.toggle("ri-menu-4-line");
    });
});

/*- show scroll up-*/
const scrollUp = () => {
    const scrollUpBtn = document.getElementById("Scroll-up");

    if (window.scrollY >= 250) {
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("-bottom-4");
    } else {
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("-bottom-4");
    }
};

// Add the scroll event listener
window.addEventListener("scroll", scrollUp);

/*-change background header-*/
const ScrollHeader = () => {
    const header = document.getElementById("navbar");

    if (window.scrollY >= 50) {
        header.classList.add("border-b", "border-yellow-500")

    } else {
        header.classList.remove("border-b", "border-yellow-500")
    }
};
// Add the scroll event listener
window.addEventListener("scroll", ScrollHeader);

/*- swiper-*/
const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 400,
    spaceBetween: 30,
    autoplay:{
        delay:3000,
        disableOnInteraction: false,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
    grabCursor: true,
    breakpoint:{
        640:{
            slidePerView: 1
        },
        768:{
            slidePerView: 2
        },
        1024:{
            slidePerView: 3
        },
    }
  });
/*-scroll section active link-*/
const activelink = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll(".nav-link");
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 60 && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
};

const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 300,
    reset: true, // Set to false if animations should only run once
});

// Add animations
sr.reveal('.home__data, .about__top, .popular__top, .review__top, .review__swiper, .footer__icon, .footer_content, .copy__right');
sr.reveal('.image__data', { delay: 500, scale: 0.5 });
sr.reveal('.service__card, .popular__card', { interval: 100 });
sr.reveal('.about__leaf', { delay: 1000, origin: 'right' });
sr.reveal('.about__item__1-content, .about__item__2-img', { origin: "right" });
sr.reveal('.about__item__2-content, .about__item__2-img', { origin: "left" });
sr.reveal('.review__leaf, .footer__floral', { delay: 1000, origin: "left" });


