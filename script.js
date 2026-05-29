// ------------------
// CARD ANIMATION
// ------------------

const cards = document.querySelectorAll(".card");

const cardObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {

      if (!entry.isIntersecting) return;

      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add("show");
        }, index * 150);
      });

      cardObserver.disconnect();
    });
  },
  {
    threshold: 0.2
  }
);

cards.forEach((card) => {
  cardObserver.observe(card);
});

// ------------------
// ACTIVE NAVIGATION
// ------------------

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-item");

function updateActiveNav() {

  let currentSection = "";

  sections.forEach((section) => {

    const top = section.offsetTop - 200;

    if (window.scrollY >= top) {
      currentSection = section.id;
    }

  });

  navItems.forEach((item) => {

    item.classList.remove("active");

    if (item.getAttribute("href") === `#${currentSection}`) {
      item.classList.add("active");
    }

  });
}

window.addEventListener("scroll", updateActiveNav);

updateActiveNav();
