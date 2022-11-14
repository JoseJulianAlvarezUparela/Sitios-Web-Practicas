const MiMenu = document.getElementById('navegation'),
Menu = document.getElementById('toggleMenu');

Menu.addEventListener('click', () => {
    MiMenu.classList.toggle('navegation-show');
});
