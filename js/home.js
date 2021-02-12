/*************************************** */
let article = document.createElement('div');
let title = document.createElement('h3');
article.appendChild(title);
article.classList.add('article');
title.classList.add('article-title')
let article_container = document.querySelector('.articles-container');
article_container.appendChild(article)
title.textContent = "title"
/************************************** */

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

/*******SWITCHING THEME MODE NAVBAR BUTTON*******/
let slider = document.querySelector('.slider')
let wraper = document.querySelector(".slider-canvas")

let clickable = wraper || slider 

clickable.addEventListener('click',darkMode);

function darkMode(){
    document.body.classList.toggle('darkedTheme')
}


/*********************************************************/
/********************* Pop up dynamic creation *******/

/* 1 ************* Pop up window **********************/

//block juste en dessous de la nav Bar
let mainContainer = document.querySelector('.main-container')
//crétion dynamique de notre fenêtre pop up
let popWindow = document.createElement('div')
document.body.appendChild(popWindow)

let template = document.querySelector('.article')
template.addEventListener('click',postInFront)

function postInFront(){
    popWindow.classList.add('pop-up-window');
    mainContainer.classList.add('pop-up');
}

/*********** 2 pop up window closing button ***********/

//button creation and posted on the pop up window
let close_pop_up = document.createElement('img');
close_pop_up.src = "../asset/cancel.svg";
popWindow.appendChild(close_pop_up);
close_pop_up.classList.add('close');

// Event to close the pop window
let closing_area =  close_pop_up || mainContainer;
closing_area.addEventListener('click',closePopUp)
//call back to close the pop up window
function closePopUp(){
    console.log('coucou')
    popWindow.classList.remove('pop-up-window');
    mainContainer.classList.remove('pop-up');
}


