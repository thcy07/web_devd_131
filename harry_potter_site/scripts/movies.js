
import { movies } from "./movies_export.js";

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const movieName = urlParams.get("name");

   
    if (movies[movieName]) {
        const movie = movies[movieName];
        document.getElementById("movie_name").textContent = movie.name;
        document.getElementById("movie_image").src = movie.image;
        document.getElementById("movie_image").alt = movie.name;
        document.getElementById("movie_info").innerHTML = movie.description;
        document.getElementById("movie_intro").innerHTML = movie.intro;
    } else {
        document.getElementById("movie_name").textContent = "Movie Not Found";
        document.getElementById("movie_info").textContent = "We couldn't find information about this movie.";
    }
});