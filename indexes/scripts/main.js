// navigation bar toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  links.style.display = links.style.display === 'block' ? 'none' : 'block';
});

//FUNCTIONS

// function to toggle the visibility of the gifs
function toggleOff(element, gifSections){
  for (let i = 0; i < gifSections.length; i++) {
    if (gifSections[i] !== element && gifSections[i].checkVisibility() == true) {
      gifSections[i].classList.toggle('hidden');
    }
  }
}

//side bar toggle function
function bodyPartsSideBarToggle() {
  const coll = document.querySelector('.sidebar');
  const title = coll.querySelector('.sidebar__title');

  // body parts sidebar wrap
  coll.classList.toggle("open")
}


//FUNCTIONS END #################################################

//load the page
window.addEventListener('DOMContentLoaded', () => {
  //buttons
  const strength = document.getElementById('strength');
  const backbtn  = document.getElementById('backbtn');

  if (strength) {
    strength.addEventListener('click', () => {
      window.location.href = 'training.html';
    });
  }
  if (backbtn) {
    backbtn.addEventListener('click', () => {
      window.location.href = 'home.html';
    });
  }

  //muscle parts
  const back = document.getElementById('backPart');
  const chest = document.getElementById('chestPart');
  const shoulders = document.getElementById('shoulderPart');
  const arms = document.getElementById('armsPart');
  const legs = document.getElementById('legsPart');
  const abs = document.getElementById('absPart');
  const glutes = document.getElementById('glutePart');

  //gif sections
  const backgifs = document.querySelector('#backGifs');
  const chestgifs = document.querySelector('#chestGifs');
  const armsgifs = document.querySelector('#armGifs');
  const shouldergifs = document.querySelector("#shoulderGifs");
  const leggifs = document.querySelector("#legGifs");
  const glutegifs = document.querySelector("#gluteGifs");
  const absgifs = document.querySelector("#absGifs");
  const cardiogifs = document.querySelector("#cardioGifs");

  //gif sections array
  const gifSections = [];
  gifSections.push(backgifs, chestgifs, armsgifs, shouldergifs, absgifs, cardiogifs, glutegifs, leggifs);

  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target && target.classList.contains("gifs")) {
      // Hide all gifs sections
      document.querySelectorAll(".gifs").forEach(section => {
        toggleOff(section, gifSections)
      });

      // Show the one matching the hash
      target.classList.toggle('hidden');
      target.scrollIntoView({ behavior: "smooth" });
    }
    
  }

  // toggle gifs by body part
    if(backgifs) {
      back.addEventListener('click', () =>{
      backgifs.classList.toggle('hidden');
      toggleOff(backgifs, gifSections);
      console.log("clicked");

      if(window.innerWidth <= 768)
        bodyPartsSideBarToggle()
    })
    }
    if(chestgifs) {
      chest.addEventListener('click', () =>{
        chestgifs.classList.toggle('hidden');
        toggleOff(chestgifs, gifSections);
        console.log("clicked");

        if(window.innerWidth <= 768)
          bodyPartsSideBarToggle()
      })
  } 
    if(shouldergifs) {
      shoulders.addEventListener('click', () =>{
      shouldergifs.classList.toggle('hidden');
      toggleOff(shouldergifs, gifSections);
      console.log("clicked");

      if(window.innerWidth <= 768)
        bodyPartsSideBarToggle()
    })
    }
    if(armsgifs) {
      arms.addEventListener('click', () =>{
      armsgifs.classList.toggle('hidden');
      toggleOff(armsgifs, gifSections);
      console.log("clicked");

      if(window.innerWidth <= 768)
        bodyPartsSideBarToggle()
    })
    }
    if(leggifs) {
      legs.addEventListener('click', () =>{
      leggifs.classList.toggle('hidden');
      toggleOff(leggifs, gifSections);
      console.log("clicked");

      if(window.innerWidth <= 768)
        bodyPartsSideBarToggle()
    })
    }
    if(absgifs) {
      abs.addEventListener('click', () =>{
      absgifs.classList.toggle('hidden');
      toggleOff(absgifs, gifSections);
      console.log("clicked");

      if(window.innerWidth <= 768)
        bodyPartsSideBarToggle()
    })
    }
    if(glutegifs) {
      glutes.addEventListener('click', () =>{
      glutegifs.classList.toggle('hidden');
      toggleOff(glutegifs, gifSections);
      console.log("clicked");

      if(window.innerWidth <= 768)
        bodyPartsSideBarToggle()
    })
    }
    
  //TODO cardio  

  const coll = document.querySelector('.sidebar');
  const title = coll.querySelector('.sidebar__title');
  title.addEventListener('click', () => {
      coll.classList.toggle('open');
  });
  bodyPartsSideBarToggle()
  
  //scroll to top button
  const goTopBtn = document.getElementById('goTopBtn');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        goTopBtn.style.display = 'block';
      } else {
        goTopBtn.style.display = 'none';
      }
    });
  
    goTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

