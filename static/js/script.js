document.addEventListener('DOMContentLoaded', () => {
    const API_KEY = '6b9808e92cf04d038d16926869d56bad';
    const BASE_URL = `https://api.rawg.io/api/games?key=${API_KEY}`;
    const gridContainer = document.getElementById('imageGrid');

    function fetchGameData() {
        fetch(BASE_URL + '&page=1&page_size=20')
            .then(response => response.json()) // Get JSON
            .then(data => {
                data.results.forEach(game => {
                    gridContainer.innerHTML += `<div><img src="${game.background_image || 'idksomethingplaceholder.com'}"><h3>${game.name}</h3></div>`;
                });
            });
    }

    fetchGameData();
});