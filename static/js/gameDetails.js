//Here I will fech the game id from local storage and use it to fetch the game details from the api.
document.addEventListener('DOMContentLoaded', () => {
    const API_KEY = '6b9808e92cf04d038d16926869d56bad'; //Will be hidden later
    const gameId = localStorage.getItem('SelectedGameId');
    const BASE_URL = `https://api.rawg.io/api/games/${gameId}?key=${API_KEY}`;
    alert(gameId);

    // Fetch game details and fill in the page
    function fetchGameDetails() {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(game => {
                // Get the image element
                let image = document.getElementById("GDimage");
                // Set the image src to the games image from api
                image.src = game.background_image;
                // Set the game name to the games name from api
                document.getElementById("GDname").innerHTML = game.name;
                // Set the game summary to the games summary from api
                document.getElementById("GDsummary").innerHTML = game.name;
                document.getElementById("GDsummarytext").innerHTML = game.description;

                // Fill status and score dropdowns
                document.getElementById("gameStatus").innerHTML = `
                    <option value="Playing">Playing</option>
                    <option value="Completed">Completed</option>
                    <option value="Plan to Play">Plan to Play</option>
                    <option value="Dropped">Dropped</option>`;
            });
    }

    fetchGameDetails();

    // Handle add to list button click
    document.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'addToListBtn') {
            const status = document.getElementById('gameStatus').value;
            const score = document.getElementById('gameScore').value;
            const name = document.getElementById("GDname").innerText;
            fetch('/add-to-list', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    game_id: gameId,
                    game_name: name,
                    status: status,
                    score: score
                })
            })
            .then(res => {
                if (res.ok) {
                    alert('Game added to your list!');
                } else {
                    alert('You must be logged in to add games.');
                }
            });
        }
    });

});