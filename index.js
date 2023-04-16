const dateElement = document.getElementById('date');
const burgerMenuElement = document.querySelector('.burger');
const menuElement = document.querySelector('.menu__body');
const header = document.querySelector('.header');
const isMobileDevice = window.matchMedia("(max-width: 767.98px)").matches;
const navLink = document.querySelectorAll('.menu__link');
const readBtn = document.querySelector('.read-btn');
const blockElement = document.querySelector('.cover-block');

function openBurgerMenuItem() {
  burgerMenuElement.classList.toggle('active');
  menuElement.classList.toggle('open');
} 

function closeBurgerMenuItem() {
  burgerMenuElement.classList.remove('active');
  menuElement.classList.remove('open');
}

function openBlock() {
  blockElement.classList.toggle('block');
}

function fillYear() {
  dateElement.innerHTML = new Date().getFullYear();
}

burgerMenuElement.addEventListener('click', openBurgerMenuItem);
navLink.forEach(link => link.addEventListener('click', closeBurgerMenuItem));
readBtn.addEventListener('click', openBlock);
window.addEventListener('load', fillYear);

