
import { characters } from "./characters_export.js";

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const characterName = urlParams.get("name");



    if (characters[characterName]) {
        const character = characters[characterName];
        document.getElementById("character_name").textContent = character.name;
        document.getElementById("character_image").src = character.image;
        document.getElementById("character_image").alt = character.name;
        document.getElementById("character_info").innerHTML = character.description;
        document.getElementById("character_intro").innerHTML = character.intro;
    } else {
        document.getElementById("character_name").textContent = "Character Not Found";
        document.getElementById("character_info").textContent = "We couldn't find information about this character.";
    }
});
