/*******SWITCHING THEME MODE NAVBAR BUTTON****** */
let slider = document.querySelector('.slider')
let wraper = document.querySelector(".slider-canvas")

let clickable = wraper || slider 

clickable.addEventListener('click',darkMode);

function darkMode(){
    console.log('coucou')
    document.body.classList.toggle('darkedTheme')
}