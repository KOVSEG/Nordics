
let header = document.querySelector('#header');
let headerNav = document.querySelector('.header__nav');
let navToggle = document.querySelector('#nav__toggle');

navToggle.addEventListener('click', function() {
  this.classList.toggle('active');
  headerNav.classList.toggle('visible');
});


// let mainH = document.querySelector('#main').scrollHeight;
// let scrollOffset = 0;

// window.addEventListener('scroll', function() {

//   scrollOffset = this.scrollY;

//   if ( scrollOffset >= 90 ) {
//     header.classList.add('fixed');
//   } else {
//     header.classList.remove('fixed');
//   }

// });