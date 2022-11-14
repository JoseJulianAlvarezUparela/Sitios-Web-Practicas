const MiMenu = document.getElementById('navegation'),
Menu = document.getElementById('toggleBtn');

Menu.addEventListener('click' , () => {
    MiMenu.classList.toggle('nav-show');
});
