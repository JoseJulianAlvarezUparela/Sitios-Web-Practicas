( function () {
    const $MiMenu = document.getElementById('navegation'),
    $BtnMenu = document.getElementById('toggleMenu');

    $BtnMenu.addEventListener('click', () => {
        $BtnMenu.firstElementChild.classList.toggle('none');
        $BtnMenu.lastElementChild.classList.toggle('none');

        $MiMenu.classList.toggle('nav-show');
    });
})();