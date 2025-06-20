// File: dynamicAdd.js
// Description: This script dynamically adds exercise GIFs to the machine display page  
// Author: Nedim Can Huray

//<<<<<<<<<<<<<<<<<<<<<<__Functions__>>>>>>>>>>>>>>>>>>>>
// This script dynamically adds exercise GIFs to the machine display page
function initExercises(machine, exercises) {
    const container = document.querySelector('.machine-gifs');
    if (!container) {
        console.warn("Container with class 'machine-gifs' not found.");
        return;
    }
    exercises.forEach(ex => {
        // Exercises under this machine
        //filter the exercises based on the machine
        if (ex.machine == machine){
            container.insertAdjacentHTML('beforeend', `
                <div class="gif-card">
                    <div class="gif-card__body">
                        <h3 class="gif-headers">${ex.title}</h3>
                        <img src="${ex.src}" alt="${ex.alt}" class="gif-card__img">
                        <p class="gif-card__desc">${ex.description}</p>
                    </div>
                </div>
            `);
            console.log(`Added exercise: ${ex.machine} - ${ex.title} - ${ex.src}`);
        }
    });
}

//<<<<<<<<<<<<<<<<<<<<<<__DOCLOADED__>>>>>>>>>>>>>>>>>>>>
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Fetch the JSON file
    let exercises = [];
    fetch('./design/data/exercises.json')
    .then(res => {
        if (!res.ok) throw new Error(res.status + ' ' + res.statusText);
        return res.json();
    })
    .then(data => {
        console.log('JSON data fetched successfully!');
        exercises = data;

        // 2. create the vars for each machine card
        const pecDeck = document.getElementById('pec-deck');
        const legPress = document.getElementById('leg-press');
        const latPulldown = document.getElementById('lat-pulldown');
        const smithMachine = document.getElementById('smith-machine');

        if (pecDeck) {
            pecDeck.addEventListener('click', () => {
                // Store the selected machine in localStorage before navigating
                localStorage.setItem('selectedMachine', 'pec-deck');
                window.location.href = 'machinesDisplay.html';
                // Do not call initExercises here, as the page will reload
                console.log('Pec Deck clicked');
            });
        }
        if(latPulldown) {
            latPulldown.addEventListener('click', () => {
                // Store the selected machine in localStorage before navigating
                localStorage.removeItem('selectedMachine'); // Clear previous selection
                localStorage.setItem('selectedMachine', 'lat-pulldown-machine');
                window.location.href = 'machinesDisplay.html';
                // Do not call initExercises here, as the page will reload
                console.log('Lat Pulldown clicked');
            });
        }
        if(smithMachine) {
            smithMachine.addEventListener('click', () => {
                // Store the selected machine in localStorage before navigating
                localStorage.removeItem('selectedMachine'); // Clear previous selection
                localStorage.setItem('selectedMachine', 'smith-machine');
                window.location.href = 'machinesDisplay.html';
                // Do not call initExercises here, as the page will reload
                console.log('Smith Machine clicked');
            });
        }

        initExercises(localStorage.getItem('selectedMachine'), exercises);
        
        
    });
})