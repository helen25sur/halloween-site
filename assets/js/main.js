/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

/*====== MENU SHOW ======*/
/* Validate if constant navToggle exist */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  })
}

/*====== MENU HIDDEN ======*/
/* Validate if constant navClose exist */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu');
}

navLink.forEach(l => l.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== GSAP ANIMATION ===============*/