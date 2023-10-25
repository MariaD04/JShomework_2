const submenuAll = Array.from(document.querySelectorAll('.menu_sub'));

submenuAll.forEach ( submenu => {
  const menuItem = submenu.closest('.menu__item');
  const menuLink = menuItem.querySelector('.menu__link');
  menuLink.addEventListener('click', (event) => {
    event.preventDefault();
    const currentSubmenu = event.target.nextElementSibling;
    const openSubmenu = document.querySelector('.menu_sub.menu_active');
    if (openSubmenu && openSubmenu.isEqualNode(currentSubmenu)) {
      openSubmenu.classList.remove('menu_active');
    } else if (openSubmenu) {
      openSubmenu.classList.remove('menu_active');
      currentSubmenu.classList.add('menu_active');
    } else {
      currentSubmenu.classList.add('menu_active');
    }
    return false;
  }) 
})


