document.addEventListener('DOMContentLoaded', () => {
    const API_KEY = '6b9808e92cf04d038d16926869d56bad'; //Will be hidden later
    const BASE_URL = `https://api.rawg.io/api/games?key=${API_KEY}`;
    const gridContainer = document.getElementById('imageGrid');
    let CurrentPage = 1;
    function fetchGameData(page) {
        fetch(`${BASE_URL}&page=${page}&page_size=20`) // Fetch games from API and get page number from current page.
            .then(response => response.json()) // Convert response to JSON.
            .then(data => {
                // Loop through games in api response
                data.results.forEach(game => {
                    // Add game to grid and uses placeholder image if no image is available
                    gridContainer.innerHTML += `<div><img src="${game.background_image || 'https://images.pexels.com/photos/8058392/pexels-photo-8058392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}"><h3>${game.name}</h3></div>`;
                });
            });
    }
    //Load first page of games
    fetchGameData(CurrentPage);

    //Load more pages
    loadMoreBtn.addEventListener('click', function() {
        CurrentPage++; // Increases currentpage by 1
        fetchGameData(CurrentPage);
    });
    
});
