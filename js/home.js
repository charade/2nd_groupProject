/***********STICKY EFFECT ON THE NAVBAR*********/
let nav = document.querySelector('nav');
let upperNav = document.querySelector('.media');
// let upperNavHeight = window.getComputedStyle(upperNav).getPropertyValue('height');
window.addEventListener('scroll',stick);

function stick(){
    if(window.scrollY > upperNav.offsetTop){
        document.body.classList.add('stick-the-nav');
    }
    else{
        document.body.classList.remove('stick-the-nav');
    }
}



/*******SWITCHING THEME MODE NAVBAR BUTTON****** */
let slider = document.querySelector('.slider')
let wraper = document.querySelector(".slider-canvas")

let clickable = wraper || slider 

clickable.addEventListener('click',darkMode);

function darkMode(){
    console.log('coucou')
    document.body.classList.toggle('darkedTheme')
}
