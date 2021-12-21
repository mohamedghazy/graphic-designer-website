/*selecting the HTML elements*/
const menubtn = document.querySelector(".menu-btn");
const menuIconOne = document.querySelector(".menu-btn .one");
const menuIconTwo = document.querySelector(".menu-btn .two");
const menuIconThree = document.querySelector(".menu-btn .three");
const navbare=document.querySelector('nav')
const logoImage=document.querySelector('.logo')
const asaide=document.querySelector('aside')
const homeSection= document.querySelector('main .home')
const theMenu = document.querySelector("main .menu");
const theMenuEle = document.querySelectorAll("main .menu ul li");
const sectionItems = document.querySelectorAll("[data-section]");
const linksItems = document.querySelectorAll("[data-linke]");

/* making functionality */
let menuOpen = false;
menubtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuIconOne.classList.add("open");
    menuIconTwo.classList.add("open");
    menuIconThree.classList.add("open");
    theMenu.classList.add("openMenu");
    theMenuEle.forEach((el) => {
      el.classList.add("openMenu");
      el.addEventListener("click", () => {
        menuIconOne.classList.remove("open");
        menuIconTwo.classList.remove("open");
        menuIconThree.classList.remove("open");
        theMenu.classList.remove("openMenu");
        menuOpen = false;
      });
    });

    menuOpen = true;
  } else {
    menuIconOne.classList.remove("open");
    menuIconTwo.classList.remove("open");
    menuIconThree.classList.remove("open");
    theMenu.classList.remove("openMenu");
    theMenuEle.forEach((el) => {
      el.classList.remove("openMenu");
    });
    menuOpen = false;
  }
});

linksItems.forEach((linke) => {
  linke.addEventListener("click", () => {
    sectionItems.forEach((section) => {
      section.classList.remove('openSection')
      if (linke.dataset.linke === section.dataset.section) {
        menuIconOne.classList.remove("open");
        menuIconTwo.classList.remove("open");
        menuIconThree.classList.remove("open");
        theMenu.classList.remove("openMenu");
        theMenuEle.forEach((el) => {
          el.classList.remove("openMenu");
        });
        menuOpen = false;
        section.classList.add('openSection')
      }
    });
  });
});

/* adding functionality to the elements */
