const navBoton = document.querySelector(".nav__boton")
const navMenu = document.querySelector(".nav-lista") 
const menu = document.querySelector('header')

navBoton.addEventListener("click", () => {
    navMenu.classList.toggle("nav-lista--visible");
});

window.addEventListener('scroll', function() {
    menu.classList.toggle('header--active', window.scrollY >0)
});