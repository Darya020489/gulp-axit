// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener("DOMContentLoaded", () => {
  // Custom JS
});

// header_has-bg=======================================================================
let header = document.querySelector(".header");

document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 1) {
    header.classList.add("header_has-bg");
  } else {
    header.classList.remove("header_has-bg");
  }
});

// Mobile-menu ================================================
const headerBurger = document.querySelector(".header__burger");
const headerNav = document.querySelector(".header__nav");
const headerClose = document.querySelector(".header__close");

headerBurger.addEventListener("click", function (event) {
  headerBurger.classList.add("burger_closed");
  headerNav.classList.add("header__nav_opened");
  headerClose.classList.add("close_opened");
});

headerNav.addEventListener("click", function ({ target }) {
  if (target.classList.contains("header__menu-link")) {
    closeMenu();
  }
});

headerClose.addEventListener("click", function (event) {
  closeMenu();
});

function closeMenu() {
  headerBurger.classList.remove("burger_closed");
  headerNav.classList.remove("header__nav_opened");
  headerClose.classList.remove("close_opened");
}

// AOS init===============================================================================
AOS.init();

// MODAL-WINDOW=============================================================================
var modal = document.getElementById("modal");
var btn = document.getElementById("promo-btn");
var span = document.querySelector(".modal__close");

btn.onclick = function () {
  modal.style.display = "block";
  document.body.classList.add("body_hidden");
};

span.onclick = function () {
  modal.style.display = "none";
  document.body.classList.remove("body_hidden");
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// TABS=============================================================================================

// Get all elements with class="tablinks" and remove the class "active"

const tabsList = document.querySelector(".tabs__tab");
const tabsCard = document.querySelectorAll(".tabs__card");
console.log(tabsCard);


for (let i = 1; i < tabsCard.length; i++) {
  tabsCard[i].style.display = "none";
}

tabsList.addEventListener("click", ({ target }) => {
  for (let i = 0; i < tabsCard.length; i++) {
    tabsCard[i].style.display = "none";
  }

  let tabNum = target.id;
  console.log(tabNum);
  let activeTab = document.querySelector(`[data-num="${tabNum}"]`);
  activeTab.style.display = "block";
  console.log(activeTab);
});

// THEME===========================================================================================
document.querySelector(".switch").addEventListener("change", (event) => {
  if (event.target.nodeName === "INPUT") {
    document.documentElement.classList.toggle("dark");
  }
});

// smooth-scrolling==============================================================================
const headerMenu = document.querySelector(".header__menu");
const anchors = headerMenu.querySelectorAll(".header__menu-link");

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    // e.preventDefault();

    const blockID = anchor.getAttribute("href");
    console.log(blockID);

    let aaa = document.querySelector(blockID);
    aaa.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
