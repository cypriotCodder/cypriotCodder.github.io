document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('langToggle');
  const menu   = document.getElementById('langMenu');

  // Open/close on click
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    menu.hidden = isOpen;
    console.log('Language menu toggled:', !isOpen);
  });

  // Click outside closes the menu
  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
      toggle.setAttribute('aria-expanded', 'false');
      menu.hidden = true;
    }
  });

  // Handle language selection
  menu.addEventListener('click', e => {
    if (e.target.matches('.lang-switcher__item')) {
      const lang = e.target.dataset.lang;
      // TODO: actually switch your page's language here
      console.log('Switch to:', lang);
      // close menu
      toggle.setAttribute('aria-expanded', 'false');
      menu.hidden = true;
    }
  });
});
