
document.addEventListener('DOMContentLoaded', function() {
    
    // This script dynamically adds a list of exercises for a selected machine
    function addGifCard({ title, gifSrc, gifAlt, description, videoUrl }) {
        const container = document.querySelector('.machine-gifs');
        
        const cardHtml = `
            <div class="gif-card">
            <div class="gif-card__body">
                <h3 class="gif-headers">${title}</h3>
                <a href="${videoUrl}" rel="noopener" target="_blank">
                <img src="${gifSrc}" alt="${gifAlt}" class="gif-card__img">
                </a>
                <p class="gif-card__desc">${description}</p>
            </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', cardHtml);
    }

    addGifCard({
        title: 'Chest Butterfly',
        gifSrc: 'design/assets/chestGifs/chestButterFly.gif',
        gifAlt: 'Chest Butterfly',
        description: 'Oturun ve dirsekleriniz hafifçe bükülü olacak şekilde kulpları kavrayın. Ardından barı çenenizin hemen altına gelene kadar aşağı çekin. Aşağıda latissimus dorsi (sırt geniş) kaslarınızı sıkın.',
        videoUrl: 'https://youtube.com/shorts/bNmvKpJSWKM?si=nm64EtNdnmoZ1Bnk'
    });


})