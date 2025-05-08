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

  document.getElementById("goback").addEventListener("click", () => {
    window.location.href = "./home.html";   
    console.log("geri button clicked!");
  });
});

const sirtLink     = document.getElementById('sirtLink');
const programsSec  = document.getElementById('gif1');
// 2. Define your GIF URLs
const sirtGifs = [
  '../assets/back.gif',
  '../assets/back2.gif',

  
  // …add as many as you like
];

// sirtLink.addEventListener('click', e => {
//   e.preventDefault();               // don’t reload the page
//   programsSec.innerHTML = '';       // clear out any old content
//   // 3. Create and append <img> for each GIF
//   sirtGifs.forEach(src => {
//     const img = document.createElement('img');
//     img.src = src;
//     img.alt = 'Sırt programı demo';
//     img.classList.add('program-gif');
//     programsSec.appendChild(img);
//   });
// });

// Grab all toggle-buttons
document.querySelectorAll('a[data-target]').forEach(btn => {
  btn.addEventListener('click', () => {
    // Get the ID of the section we want to toggle
    const sectionId = btn.getAttribute('data-target');
    const section = document.getElementById(sectionId);
    if (!section) return;

    // Toggle the "hidden" class
    section.classList.toggle('hidden');
  });
});