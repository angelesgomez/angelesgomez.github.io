const navBoton = document.querySelector(".nav__boton")
const navMenu = document.querySelector(".nav-lista") 

navBoton.addEventListener("click", () => {
    navMenu.classList.toggle("nav-lista--visible");
});
const menu = document.querySelector('header')

    window.addEventListener('scroll', function() {
        menu.classList.toggle('header--active', window.scrollY >0)
    });

const acordeon = document.getElementsByClassName('proyecto-article');

for(let i=0; i<acordeon.length;i++){
    acordeon[i].addEventListener('click', function(){
        this.classList.toggle('proy-active')
    })
}
