const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');
    toggle.addEventListener('click', () => {
      links.style.display = links.style.display === 'block' ? 'none' : 'block';
    });

document.getElementById("strength").addEventListener("click", () => {
    console.log("Strength button clicked!");
    window.location.href = "training.html";
})

document.getElementById("home").addEventListener("click", () => {
    window.location.href = "home.html";   
    console.log("Home button clicked!");
})