//Here I will fech the game id from local storage and use it to fetch the game details from the api.
document.addEventListener('DOMContentLoaded', () => {
    const API_KEY = '6b9808e92cf04d038d16926869d56bad'; //Will be hidden later
    const gameId = localStorage.getItem('SelectedGameId');
    const BASE_URL = `https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`;
    alert(gameId);
    fetch(BASE_URL)

    function fetchGameDetails() {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(game => {
                // Get the image element
                let image = document.getElementById("GDimage");
                // Set the image src to the games image from api
                image.src = game.background_image;
            })
    }

    fetchGameDetails();



});