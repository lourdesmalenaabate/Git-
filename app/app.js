
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

//# Mapa de Contacto
// Declaraciones
const 
  d = document,
  mapButton = d.querySelector('#footer .btn.map'),
  mapFrame = d.querySelector('#footer iframe.map');

// Eventos
mapButton.onclick = function(event){
  if(mapFrame.classList.toggle('active')){
    event.target.classList.replace('icon-plus','icon-less');
  }
  else {
    event.target.classList.replace('icon-less', 'icon-plus');
  }
}
//# Mapa de Contacto