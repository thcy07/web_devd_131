import { movies } from './movies_export.js';
import { characters } from './characters_export.js';

const searchInput = document.getElementById("search");

// Handle Enter key in the search input
searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault(); // Stop form from submitting/reloading

        const query = searchInput.value.toLowerCase().trim();
        console.log("Search query:", query); // Log the query value

        if (query) {
            // Search in movies
            const movieEntry = Object.entries(movies).find(([key, data]) => {
                const normalizedKey = key.toLowerCase().replace(/_/g, " ");
                console.log("Normalized movie key:", normalizedKey); // Log the normalized key
                return normalizedKey.includes(query);
            });

            if (movieEntry) {
                const movieName = movieEntry[0]; // Get the movie name from the entry
                console.log("Movie found:", movieName); // Log the found movie name
                navigateToMovieInfo(movieName);
                return;
            }

            // Search in characters
            const characterEntry = Object.entries(characters).find(([key, data]) => {
                const normalizedKey = key.toLowerCase().replace(/_/g, " ");
                console.log("Normalized character key:", normalizedKey); // Log the normalized key
                return normalizedKey.includes(query);
            });

            if (characterEntry) {
                const characterName = characterEntry[0]; // Get the character name from the entry
                console.log("Character found:", characterName); // Log the found character name
                navigateToCharacterInfo(characterName);
                return;
            }

            // If no match is found
            alert("No matching movie or character found!");
        }
    }
});

// Function to navigate to movies_info.html with the selected movie
function navigateToMovieInfo(movieName) {
    console.log("Navigating to:", `movies_info.html?name=${movieName}`);
    window.location.href = `movies_info.html?name=${movieName}`;
}

// Function to navigate to characters_info.html with the selected character
function navigateToCharacterInfo(characterName) {
    console.log("Navigating to:", `characters_info.html?name=${characterName}`);
    window.location.href = `characters_info.html?name=${characterName}`;
}