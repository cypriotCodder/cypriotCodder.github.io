/**
 * Language Switcher Script
 * This script handles the language switching functionality for a web page.
 * It allows users to toggle between different languages and updates the page content accordingly.
 * @author NEDIM CAN HURAY
 * @version 1.0
 * @license MOW
 */

//fetch the language from json file
let TRANSLATIONS = {};
savedLang = localStorage.getItem('language') || 'tr'; // Default to Turkish

fetch('./design/data/translations.json')
  .then(response => response.json())
  .then(data => {
    TRANSLATIONS = data;
    console.log('Translations loaded');
    setLanguage(savedLang);
  })
  .catch(error => console.error('Error loading translations:', error));


//function to set the language
function setLanguage(lang){
  if (TRANSLATIONS[lang]) {
    document.documentElement.lang = lang; // Set the document language
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const text = TRANSLATIONS[lang][key];
      if (text) el.textContent = text;
    });
    console.log(`Language switched to: ${lang}`);
  } else {
    console.warn(`Language "${lang}" not found in translations.`);
  }
}

// DOMContent Loaded Event
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('langToggle');
  const menu   = document.getElementById('langMenu');

  // Load the language from localStorage or use default
  console.log('Saved language1:', savedLang);
  

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
      localStorage.setItem('language', lang); // Save selected language
      console.log('Language saved:', lang);
      setLanguage(lang);
      window.location.reload(); // Reload to apply changes
      console.log('Switch to:', lang);
      // close menu
      toggle.setAttribute('aria-expanded', 'false');
      menu.hidden = true;
    }
  });
});


