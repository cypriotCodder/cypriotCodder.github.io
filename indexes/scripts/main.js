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
  const gifs = document.querySelector('.gifs');
  if(gifs && back){
    back.addEventListener('click', () =>{
      gifs.classList.toggle('hidden')
      console.log("clicked")
    })
  }

});

const sirtLink     = document.getElementById('sirtLink');
const programsSec  = document.getElementById('gif1');

