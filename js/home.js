/*******************creating articles****************************/
let category = Array.from(document.querySelectorAll('section'));
console.log(category);
function createArticle(titre,synopsis,contenu,auteur,image,randomId){
    console.log(category[randomId-1]);
    let wrapper  = document.createElement('div');
    wrapper.classList.add('wrapper');
    let content_wrapper = document.createElement('div');
    let title    = document.createElement('h3');
    let resume   = document.createElement('p');
    let content  = document.createElement('p');
    let author   = document.createElement('h4');

    content_wrapper.classList.add('content-wrapper');
    title.classList.add('article-title');
    resume.classList.add('resume');
    content.classList.add('hidden');
    author.classList.add('hidden');

    content_wrapper.appendChild(title);
    content_wrapper.appendChild(resume);
    content_wrapper.appendChild(content);
    content_wrapper.appendChild(author);
    wrapper.appendChild(content_wrapper);
    category[randomId-1].appendChild(wrapper);
    
    wrapper.backgroundImage = url(image);
    title.textContent   = titre;
    resume.textContent  = synopsis;
    content.textContent = contenu;
    author.textContent  = auteur;
}
// createArticle();

/***********************************************/
/***********STICKY EFFECT ON THE NAVBAR*********/
let nav = document.querySelector('nav');
let upperNav = document.querySelector('.media');
// let upperNavHeight = window.getComputedStyle(upperNav).getPropertyValue('height');
// window.addEventListener('scroll',stick);

// function stick(){
//     if(window.scrollY > upperNav.offsetTop){
//         document.body.classList.add('stick-the-nav');
//     }
//     else{
//         document.body.classList.remove('stick-the-nav');
//     }
// }
/******* SWITCHING THEME MODE NAVBAR BUTTON *******/
let slider = document.querySelector('.slider');
let wraper = document.querySelector(".slider-canvas");

let clickable = wraper || slider ;

clickable.addEventListener('click',darkMode);

function darkMode(){
    document.body.classList.toggle('darkedTheme');
}
/******************************************************/
/********************* Pop up dynamic creation *******/
/* 1 ************* Pop up window created *********************/

//block juste en dessous de la nav Bar
let mainContainer = document.querySelector('.main-container');
//crétion dynamique de notre fenêtre pop up
let popWindow = document.createElement('div');
document.body.appendChild(popWindow);

let template = document.querySelectorAll('.content-wrapper');
template.forEach(tmp =>tmp.addEventListener('click',postInFront));

function postInFront(){
    popWindow.classList.add('pop-up-window');
    mainContainer.classList.add('pop-up');
}

/*2 ********** pop up window closing button ***********/
//button creation and posted on the pop up window
let close_pop_up = document.createElement('img');
close_pop_up.src = "../asset/cancel.svg";
popWindow.appendChild(close_pop_up);
close_pop_up.classList.add('close');

// Event to close the pop window
close_pop_up.addEventListener('click',closePopUp)
//call back to close the pop up window
function closePopUp(){
    popWindow.classList.remove('pop-up-window');
    mainContainer.classList.remove('pop-up');
}

// let hj = new SignUp("jeronimo","plouf","3gem09Ekllmdc232ly90r1@gmail.com","1234")


