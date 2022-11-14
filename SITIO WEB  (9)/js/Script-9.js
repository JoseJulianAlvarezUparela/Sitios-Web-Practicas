const MiMenu = document.getElementById('navegation'),
menu = document.getElementById('toggleBtn');

menu.addEventListener('click', () =>{
    MiMenu.classList.toggle('nav-show');
});