
// Funciones del panel de navegacion (vista movil)
const btnMenu = document.getElementById("btn-menu");
const btnCloseNav = document.getElementById("btn-close-nav");
const nav = document.getElementById("nav");

btnMenu.addEventListener('click', () => {
  nav.classList.toggle('open-nav');
  nav.classList.toggle('close-nav');
});

btnCloseNav.addEventListener('click', () => {
  nav.classList.toggle('open-nav');
  nav.classList.toggle('close-nav');
})


