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

console.log('hey')