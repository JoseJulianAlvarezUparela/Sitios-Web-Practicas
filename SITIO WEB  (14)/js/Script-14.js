const MiMenu = document.getElementById('navegation'),
MenuBtn = document.getElementById('toggleBtn');

MenuBtn.addEventListener('click' , () => {
    MiMenu.classList.toggle('nav-show');
});

