/* =====================================================
   NAVBAR SCROLL
===================================================== */

const navbar = document.getElementById("mainNavbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* =====================================================
   BACK TO TOP
===================================================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});

/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(".nav-link");

function updateActiveNav() {
  const scrollPosition = window.scrollY + 150;

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    const target = link.getAttribute("href");

    if (target === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveNav);

window.addEventListener("load", updateActiveNav);

/* =====================================================
   MOBILE NAVBAR CLOSE
===================================================== */

const navbarCollapse = document.getElementById("navbarNav");

const navLinksAll = document.querySelectorAll("#navbarNav .nav-link");

navLinksAll.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 992) {
      const collapse = bootstrap.Collapse.getInstance(navbarCollapse);

      if (collapse) {
        collapse.hide();
      }
    }
  });
});

/* =====================================================
   SMOOTH SCROLL PRECISION
===================================================== */

navLinksAll.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || !targetId.startsWith("#")) {
      return;
    }

    const target = document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();

    const navbarHeight = navbar.offsetHeight;

    const targetPosition =
      target.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({
      top: targetPosition,

      behavior: "smooth",
    });
  });
});

/* =====================================================
   CURRENT YEAR
===================================================== */

const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();
