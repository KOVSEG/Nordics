
let header = document.querySelector('#header');
let headerNav = document.querySelector('.header__nav');
let navToggle = document.querySelector('#nav__toggle');

navToggle.addEventListener('click', function() {
  this.classList.toggle('active');
  headerNav.classList.toggle('visible');
});