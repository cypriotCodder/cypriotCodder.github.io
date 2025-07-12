// File: dynamicAdd.js
// Description: This script dynamically adds exercise GIFs to the machine display page  
// Author: Nedim Can Huray

import bodyPartsSideBarToggle from './main.js';

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
            let lang = localStorage.getItem('language') || 'tr'; // Default to Turkish if not set
            container.insertAdjacentHTML('beforeend', `
                <div class="gif-card">
                    <div class="gif-card__body">
                        <h3 class="gif-headers">${ex.title}</h3>
                        <img src="${ex.src}" alt="${ex.alt}" class="gif-card__img">
                        <p class="gif-card__desc">${ex.description[lang]}</p>
                    </div>
                </div>
            `);
            console.log(`Added exercise: ${ex.machine} - ${ex.title} - ${ex.src}`);
        }
    });
}

function bodypartsExercises(bPart, exercises){
    const container = document.querySelector('.gifs');
    console.log("Active")
    if(!container){
        console.warn("Container with class 'machine-gifs' not found.");
    }
    exercises.forEach(ex => {
        if(ex.parts == bPart){
            let lang = localStorage.getItem('language') || 'tr'; // Default to Turkish if not set
            container.insertAdjacentHTML('beforeend', `
                    <div class="gif-card">
                        <div class="gif-card__body">
                            <h3 class="gif-headers">${ex.title}</h3>
                            <img src="${ex.src}" alt="${ex.alt}" class="gif-card__img">
                            <p class="gif-card__desc">${ex.description[lang]}</p>
                        </div>
                    </div>
                `);
                console.log(`Added exercise: ${ex.machine} - ${ex.title} - ${ex.src}`);
                console.log(`part: ${ex.part}`)
                if(window.innerWidth <= 768)
                   bodyPartsSideBarToggle()
        }
    });
}

//<<<<<<<<<<<<<<<<<<<<<<__DOCLOADED__>>>>>>>>>>>>>>>>>>>>
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Fetch the JSON file
    let exercises = [];

    
    
    fetch(`./design/data/exercises_allLang.json`)
    .then(res => {
        if (!res.ok) throw new Error(res.status + ' ' + res.statusText);
        return res.json();
    })
    .then(data => {
        console.log('JSON data fetched successfully!');
        exercises = data;

        const params = new URLSearchParams(window.location.search);
        const machine = params.get('machine');


        if(machine){
            initExercises(machine, exercises);
        }

        // 2. create the vars for each machine card
        const cards = document.querySelectorAll('.machine-card')
        // 3. Add event listeners to each machine card
        if(cards.length > 0) {
            cards.forEach(card => {
                card.addEventListener('click', () => {
                    // Store the selected machine in localStorage before navigating
                    const key = card.dataset.machine;
                    window.location.href = `machinesDisplay.html?machine=${encodeURIComponent(key)}`;
                    console.log(`${key} clicked`);
                });
            }); 
        }

        const part = params.get('part');
        if(part){
            bodypartsExercises(part, exercises)
        }

        const partList = document.querySelectorAll('.sidebar__link');
        if(partList.length > 0){
            partList.forEach(part => {
                part.addEventListener('click', ()=> {
                    console.log(`hey`);
                    const key = part.dataset.part;
                    window.location.href = `training.html?part=${encodeURIComponent(key)}`;
                    console.log(`${key} clicked`);
                    if(window.innerWidth <= 768)
                        bodyPartsSideBarToggle();
                })
            })
        }
    });
})