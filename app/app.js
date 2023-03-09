
// Funciones del panel de navegacion (vista movil)
const btnMenu = document.getElementById("btn-menu");
const btnCloseNav = document.getElementById("btn-close-nav");
const nav = document.getElementById("nav");

btnMenu.addEventListener('click', () => {
  toggle({
    target: nav,
    button: nav,
    classList: ['open-nav', 'close-nav']
  })
});

btnCloseNav.addEventListener('click', () => toggle({
  target: nav,
  button: nav,
  classList: ['open-close', 'close-open']
}))

//# Mapa de Contacto
// Declaraciones
const 
  d = document,
  mapButton = d.querySelector('#footer .btn.map'),
  mapFrame = d.querySelector('#footer iframe.map');

// Eventos
mapButton.onclick = function(event){
  toggle( {
    button: event.target,
    target: mapFrame,
    classList: ['icon-plus','icon-less'],
  } )
}
//# Mapa de Contacto

// Funciones
function toggle(object){
  const { button, target, classList } = object;
  if(target.classList.toggle('active')){
    button.classList.replace(classList[0],classList[1]);
  }
  else {
    button.classList.replace(classList[1], classList[0]);
  }
}