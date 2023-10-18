const menuMain = document.querySelector('.menu_main');

menuMain.addEventListener('click', event => {
  const menuLink = event.target;
  const menuItem = menuLink.closest('.menu__item')
  
  if (menuItem.querySelector('.menu_sub')) {
    const submenu = menuItem.querySelector('.menu_sub');
    event.preventDefault();
    submenu.classList.toggle('menu_active');
    const submenuLinks = submenu.querySelectorAll('.menu__link');
    submenuLinks.forEach(link => {
      link.onclick = () => {
        submenu.classList.remove('menu_active');
        return false;
      }
    }); 
  }
})


