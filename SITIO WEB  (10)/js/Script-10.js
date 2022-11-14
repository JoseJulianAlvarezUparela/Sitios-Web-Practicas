const MiMenu = document.getElementById('navegation'),
menu = document.getElementById('toggleBtn');

menu.addEventListener('click', () => {
    MiMenu.classList.toggle('show-nav');
});

