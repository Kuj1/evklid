const click = document.querySelector ('.btn-click');
const quit = document.querySelector ('.btn-quit');
const activeSearch = document.querySelector('.header__search-form')
// const activeContainer = document.querySelector('.header__search-container')

click.addEventListener('click', function(e) {
  e.stopPropagation();
  activeSearch.classList.add('header__search-form_active');
  // activeContainer.classList.add('header__search-container_active')
  click.classList.add('btn-click_active');
});

quit.addEventListener('click', function() {
  activeSearch.classList.remove('header__search-form_active');
  // activeContainer.classList.remove('header__search-container_active')
  click.classList.remove('btn-click_active');
});

