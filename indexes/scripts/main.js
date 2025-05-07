const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');
    toggle.addEventListener('click', () => {
      links.style.display = links.style.display === 'block' ? 'none' : 'block';
    });