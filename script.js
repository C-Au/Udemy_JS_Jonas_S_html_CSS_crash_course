// script.js
document.getElementById('popupButton').addEventListener('click', function() {
  document.getElementById('popup').classList.toggle('visible');
});

document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('popup').classList.remove('visible');
});