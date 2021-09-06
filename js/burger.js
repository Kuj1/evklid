function burgerMenu() {
  let menu = $('.burger-menu');
  let button = menu.find('.burger-menu__button', '.burger-menu__lines');
  let links = menu.find('.burger-list__link');
  let overlay = menu.find('.burger-menu__overlay');

  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.on('click', () => toggleMenu());
  overlay.on('click', () => toggleMenu());

  function toggleMenu(){
    menu.toggleClass('burger-menu_active');

    if (menu.hasClass('burger-menu_active')) {
      $('body').css('overlow', 'hidden');
    } else {
      $('body').css('overlow', 'visible');
    }
  }
}

// burgerMenu('.burger-menu');



