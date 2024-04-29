const iconMenu = document.querySelector('.header-container__menu-icon');

if(iconMenu) {
    const menuBody = document.querySelector('.menu-body');

    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}