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
const headerClose = document.querySelector('.header__close');

headerBurger.addEventListener("click", function (event) {
  headerBurger.classList.add("burger_closed");
  headerNav.classList.add("header__nav_opened");
  headerClose.classList.add("header__close_opened");
});

headerClose.addEventListener("click", function (event) {
  headerBurger.classList.remove("burger_closed");
  headerNav.classList.remove("header__nav_opened");
  headerClose.classList.remove("header__close_opened");
});

// AOS init===============================================================================
AOS.init();

// MODAL-WINDOW=============================================================================
var modal = document.getElementById("modal");
var btn = document.getElementById("promo-btn");
var span = document.getElementsByClassName("modal__close")[0];


btn.onclick = function () {
  modal.style.display = "block";
  document.body.classList.add("body_hidden");
};

span.onclick = function () {
  modal.style.display = "none";
  document.body.classList.remove("body_hidden");
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// TABS=============================================================================================

// Get all elements with class="tablinks" and remove the class "active"

const tabs__link = document.querySelectorAll(".tabs__link");

tabs__link.forEach(function (btn) {
  btn.addEventListener("click", function () {



    function openPage(evt, pageName) {
      // Declare all variables
      var i, tabs__card, tabs__link;

      // Get all elements with class="tabcontent" and hide them
      tabs__card = document.getElementsByClassName("tabs__card");
      for (i = 0; i < tabs__card.length; i++) {
        tabs__card[i].style.display = "none";
      }

      tabs__link = document.getElementsByClassName("tabs__link");

      for (i = 0; i < tabs__link.length; i++) {
        tabs__link[i].className = tabs__link[i].className.replace(
          " active",
          ""
        );
      }

      // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(pageName).style.display = "block";
      evt.currentTarget.className += " active";
    }
  });
});


document.getElementById("defaultOpen").click();



// THEME===========================================================================================
document.querySelector(".switch").addEventListener("change", (event) => {
  if (event.target.nodeName === "INPUT") {
    document.documentElement.classList.toggle("dark");
  }
});

// smooth-scrolling==============================================================================
const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
