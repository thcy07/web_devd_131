const menuButton = document.querySelector('.menuButton'); 
const menu = document.querySelector('.menu');

function toggleMenu() {
    menu.classList.toggle('hide');
}

menuButton.addEventListener('click', toggleMenu);

function handleResize() {
    if (window.innerWidth > 1000) {
        menu.classList.remove('hide');  
    } else {
        menu.classList.add('hide');  
    }
}

handleResize(); 
window.addEventListener("resize", handleResize);

function viewerTemplate(pic, alt) {
  return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${pic}" alt="${alt}">
    </div>`;
}

function handleViewerClick(event) {
  if (event.target.classList.contains('closeViewer')) {
    const viewer = event.target.closest('.viewer');
    viewer.remove();
  }
}