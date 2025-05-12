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
  const arms = document.getElementById('armsPart');
  const legs = document.getElementById('legsPart');
  const abs = document.getElementById('absPart');
  const glutes = document.getElementById('glutesPart');
  const shoulders = document.getElementById('shouldersPart');

  //gif sections
  const backgifs = document.querySelector('#backGifs');
  const chestgifs = document.querySelector('#chestGifs');
  const armsgifs = document.querySelector('#armGifs');
  //gif sections array
  const gifSections = []
  gifSections.push(backgifs, chestgifs, armsgifs)

  // toggle gifs by body part
  if(backgifs){
    back.addEventListener('click', () =>{
      backgifs.classList.toggle('hidden');
      toggleOff(backgifs, gifSections);
      console.log("clicked");
    })
  }
  if(chestgifs){
    chest.addEventListener('click', () =>{
      chestgifs.classList.toggle('hidden')
      toggleOff(chestgifs, gifSections);
      console.log("clicked")
    })
  }
  if(armsgifs){
    arms.addEventListener('click', () =>{
      armsgifs.classList.toggle('hidden')
      toggleOff(armsgifs, gifSections);
      console.log("clicked")
    })
  }

});

const sirtLink     = document.getElementById('sirtLink');
const programsSec  = document.getElementById('gif1');

