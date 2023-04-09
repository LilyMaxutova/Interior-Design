//  ============== set date =============
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

//  ============== open nav =============
document.querySelector('.burger').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.menu__body').classList.toggle('open');
})

//  ============== fixed header =============
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
  const scrollHeight = window.pageYOffset;
  const navHeight = header.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    header.classList.add('fixed-header');
  } else {
    header.classList.remove('fixed-header')
  }
});

//  ============== active and remove menu =============
const navLink = document.querySelectorAll('.menu__link');
navLink.forEach(link => link.addEventListener('click', () => {
  document.querySelector('.menu__body').classList.remove('open');
  document.querySelector('.burger').classList.remove('active');
}))

