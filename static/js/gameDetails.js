//Here I will fech the game id from local storage and use it to fetch the game details from the api.
document.addEventListener('DOMContentLoaded', () => {
    const API_KEY = '6b9808e92cf04d038d16926869d56bad'; //Will be hidden later
    const BASE_URL = `https://api.rawg.io/api/games?key=${API_KEY}`;
    const gameId = localStorage.getItem('SelectedGameId');
    alert(gameId);
    let image = document.getElementById("GDimage")
    image.src = "https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg"

});