
const menuContainer = document.getElementById('menuContainer')
const btnMenu = document.getElementById('menu_toogle')


if (btnMenu) {
    btnMenu.addEventListener('click', () => {
        if (menuContainer.classList.contains('nav_on')) {
            menuContainer.classList.remove('nav_on');
        } else {
            menuContainer.classList.add('nav_on');
        }
    });
}

// cambia el menu que se ostrara en la pantalla si es para smarth menor a 640px o desktop
const responsiveMenu = () => {
    if (window.innerWidth >= 665) {
        if (!menuContainer.classList.contains('menuContainer')) {
            menuContainer.classList.remove('menuContainerSmall');
            menuContainer.classList.add('menuContainer');
        }
    } else {
        if (!menuContainer.classList.contains('menuContainerSmall')) {
            menuContainer.classList.remove('menuContainer');
            menuContainer.classList.add('menuContainerSmall');
        }
    }
}
responsiveMenu();
addEventListener('resize', responsiveMenu);

