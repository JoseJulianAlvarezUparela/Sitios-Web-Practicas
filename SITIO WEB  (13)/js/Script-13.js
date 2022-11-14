const MiMenu = document.getElementById('navegation'),
MenuBtn = document.getElementById('toggleMenu');

MenuBtn.addEventListener('click', () => {
    MiMenu.classList.toggle('show-nav');
});
