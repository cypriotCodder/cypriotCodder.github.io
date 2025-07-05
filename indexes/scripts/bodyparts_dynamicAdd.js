//functions
function initExercises(machine, exercises) {
    const container = document.querySelector('.gifs');
    if (!container) {
        console.warn("Container with class 'gifs' not found.");
        return;
    }
    exercises.forEach(ex => {
        // Exercises under this machine
        //filter the exercises based on the machine
        if (ex.machine == machine){
            container.insertAdjacentHTML('beforeend', `
                <div class="gif-card">
                    <div class="gif-card__body">
                        <h3 class="gif-headers">${ex}</h3>
                        <a href="${ex}" rel="noopener" target="_blank"><img  src="${ex}" alt="Lat Pulldown" class="gif-card__img"></a>
                        <p class="gif-card__desc">${ex}</p>
                    </div>
                </div>
            `);
            console.log(`Added exercise: ${ex.machine} - ${ex.title} - ${ex.src}`);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {

    

});