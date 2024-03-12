const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))
window.addEventListener("scroll", function() {
  const logo = document.querySelector(".logo");
  logo.style.transform = "scale(" + (1 + window.scrollY * 0.001) + ")";
});
