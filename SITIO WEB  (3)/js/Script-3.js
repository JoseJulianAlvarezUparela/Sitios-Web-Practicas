const toggleMenu = document.getElementById('toggleMenu'),
mainMenu = document.getElementById('enlaces');

toggleMenu.addEventListener('click',  () => {
    mainMenu.classList.toggle('enlaces--show');
});
