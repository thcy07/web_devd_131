const themeSelector = document.querySelector('#theme');
const logo = document.querySelector('#logo');

function changeTheme() {
    const selectedTheme = themeSelector.value;

    if (selectedTheme === 'Dark') {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');

        logo.src = "byui-logo_white.png"; 
    } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');

        logo.src = "byui-logo_blue.webp"; 
    }
}

themeSelector.addEventListener('change', changeTheme);
