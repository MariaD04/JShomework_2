const menulinks = document.querySelectorAll('.menu__link');

menulinks.forEach(link => {
  link.onclick = function(event) {
    const submenu = link.closest('.menu__item').querySelector('.menu_sub');
    if (submenu) {
      event.preventDefault();
      submenu.classList.add('menu_active');
    }

    let nestedlinks = submenu.querySelectorAll('.menu__link');
    nestedlinks.forEach(link => {
      link.onclick = () => {
        return false;
      }
    })
  }
});

