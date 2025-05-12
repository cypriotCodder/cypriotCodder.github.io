const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  links.style.display = links.style.display === 'block' ? 'none' : 'block';
});

window.addEventListener('DOMContentLoaded', () => {

  const strength = document.getElementById('strength');
  const backbtn  = document.getElementById('backbtn');

  //muscle parts
  const back = document.getElementById('backPart');
  const chest = document.getElementById('chestPart');
  const arms = document.getElementById('armsPart');
  const legs = document.getElementById('legsPart');
  const abs = document.getElementById('absPart');
  const glutes = document.getElementById('glutesPart');
  const shoulders = document.getElementById('shouldersPart');

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
  const backgifs = document.querySelector('#backGifs');
  const chestgifs = document.querySelector('#chestGifs');
  const armsgifs = document.querySelector('#armGifs');

  if(backgifs){
    back.addEventListener('click', () =>{
      backgifs.classList.toggle('hidden')
      console.log("clicked")
    })
  }
  if(chestgifs){
    chest.addEventListener('click', () =>{
      chestgifs.classList.toggle('hidden')
      console.log("clicked")
    })
  }
  if(armsgifs){
    armsgifs.addEventListener('click', () =>{
      armsgifs.classList.toggle('hidden')
      console.log("clicked")
    })
  }

});

const sirtLink     = document.getElementById('sirtLink');
const programsSec  = document.getElementById('gif1');

