const MiMenu = document.getElementById('toggleMenu'),
Menu = document.getElementById('navegation');

MiMenu.addEventListener('click', () => {
    Menu.classList.toggle('navegation-show');
});