const navbar_toggle = document.querySelector('.nav__content-toggle');
const navbar = document.querySelector('.nav__content');
const navbar_toggleIcon = document.querySelector('.nav__content-toggle i')

navbar_toggle.addEventListener('click', () => {
    if(navbar.classList.contains('nav__content')) {
        navbar.classList.replace('nav__content', 'nav__content-active');
        
        // cambiando el icono a la X
        navbar_toggleIcon.setAttribute('class', 'fa fa-times');
    }
    else {
        navbar.classList.replace('nav__content-active', 'nav__content');
        navbar_toggleIcon.setAttribute('class', 'fa fa-bars');
    }
});