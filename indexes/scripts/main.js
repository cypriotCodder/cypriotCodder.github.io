const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  links.style.display = links.style.display === 'block' ? 'none' : 'block';
});

window.addEventListener("DOMContentLoaded", () => {

  document.getElementById("strength").addEventListener("click", () => {
  window.location.href = "./training.html";
    console.log("Strength button clicked!");
  })

  document.getElementsByClassName("btngeri").addEventListener("click", () => {
    window.location.href = "./home.html";   
    console.log("geri button clicked!");
  });
});