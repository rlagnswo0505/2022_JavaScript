const heading = document.querySelector('.heading');
heading.onclick = function () {
  heading.style.color = 'red';
};
const texts = document.querySelectorAll('.text');
texts[0].onclick = function () {
  this.style.color = 'blue';
};
