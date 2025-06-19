
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Fetch the JSON file
    let exercises = [];
    data = fetch('./design/data/exercises.json')
    .then(res => {
        if (!res.ok) throw new Error(res.status + ' ' + res.statusText);
        return res.json();
    })
    .then(data => {
        console.log('JSON data fetched successfully!', data);
        exercises = data;
        initExercises(data);
    })
    .catch(err => console.error('Fetch error:', err));

    //TODO add the functionality to dynamically add exercises
    // 2. create the vars for each machine card
    const pecDeck = document.getElementById('pec-deck');
    const legPress = document.getElementById('leg-press');
    const latPulldown = document.getElementById('lat-pulldown');
    const benchPress = document.getElementById('bench-press');
    
    pecDeck.addEventListener('click', () => {
        initExercises(exercises.filter(ex => ex.machine === 'Pec Deck'));
        console.log('Pec Deck clicked');

    function initExercises(machine) {
        exercises.forEach(exercises => {
            const container = document.querySelector('.machine-gifs');
            // Exercises under this machine
            //filter the exercises based on the machine
            if (exercises.machine !== machine) return;
                container.insertAdjacentHTML('beforeend', `
                    <div class="gif-card">
                        <div class="gif-card__body">
                            <h3 class="gif-headers">${ex.title}</h3>
                            <img src="${ex.src}" alt="${ex.alt}" class="gif-card__img">
                            <p class="gif-card__desc">${ex.description}</p>
                        </div>
                    </div>
                `);
        });
    }

    // This script dynamically adds a list of exercises for a selected machine
    function addGifCard({ title, gifSrc, gifAlt, description, videoUrl }) {
        const container = document.querySelector('.machine-gifs');
        
        // const cardHtml = `
        //     <div class="gif-card">
        //         <div class="gif-card__body">
        //             <h3 class="gif-headers">${title}</h3>
        //             <a href="${videoUrl}" rel="noopener" target="_blank">
        //             <img src="${gifSrc}" alt="${gifAlt}" class="gif-card__img">
        //             </a>
        //             <p class="gif-card__desc">${description}</p>
        //         </div>
        //     </div>
        // `;
        // container.insertAdjacentHTML('beforeend', cardHtml);
    }

    // addGifCard({
    //     title: 'Chest Butterfly',
    //     gifSrc: 'design/assets/chestGifs/chestButterFly.gif',
    //     gifAlt: 'Chest Butterfly',
    //     description: 'Oturun ve dirsekleriniz hafifçe bükülü olacak şekilde kulpları kavrayın. Ardından barı çenenizin hemen altına gelene kadar aşağı çekin. Aşağıda latissimus dorsi (sırt geniş) kaslarınızı sıkın.',
    //     videoUrl: 'https://youtube.com/shorts/bNmvKpJSWKM?si=nm64EtNdnmoZ1Bnk'
    // });

    console.log('Dynamic GIFs added successfully!');
    console.log('Exercise objects created:', exercises);

})