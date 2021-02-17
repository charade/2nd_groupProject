//block juste en dessous de la nav Bar
let mainContainer = document.querySelector('.main-container');
//crétion dynamique de notre fenêtre pop up
let popWindow = document.createElement('div');
document.body.appendChild(popWindow);

let wrapper = document.querySelectorAll('.wrapper')

async function fillArticle(id){
    let init = {
               method:'POST',
               headers:{
                   "content-type":'application/json'
               },
               body:JSON.stringify({
                   "email":'amelia@test.fr',
                   "password" : 'yesPapa'
               })
    }

    let reponse = await fetch('https://simplonews.brianboudrioux.fr/users/login',init);
    let data = await reponse.json();
    if(reponse.status == 200){
        let requestConfig = {
            method:'GET',
            headers : {
                "content-type":'application/json',
                "Authorization": "Bearer "+ data.token
            }
        }
        let response = await fetch(`https://simplonews.brianboudrioux.fr/articles/category/${id}`,requestConfig);
        let donnee = await response.json();
        let pop_content = document.createElement('p');
        let author = document.createElement('h5');
        popWindow.appendChild(pop_content);
        popWindow.appendChild(author);
        author.classList.add('author')
        pop_content.classList.add('pop-up-content')
        if(reponse.status == 200)
        {
          for(let i = 0; i < wrapper.length; i++){
            initWrapper(wrapper[i], donnee.article[i])
            wrapper[i].firstElementChild.addEventListener('click',() =>{
                popWindow.classList.remove('pop-up-window-hidden')
                popWindow.classList.add('pop-up-window');
                mainContainer.classList.add('pop-up');
                pop_content.textContent = donnee.article[i].content;
                author.textContent = "~ "+donnee.article[i].author+" ~";
            })
          }
          
        }
        }

        else{
                return;
            }
    }

fillArticle(3)

function initWrapper(wrapper,obj){
    wrapper.style.backgroundImage = "url(" + obj.img +")"
    let title = document.createElement('h2');
    let resume = document.createElement('p');
    wrapper.firstElementChild.appendChild(title);
    title.classList.add('article-title');
    title.textContent = obj.title;
    wrapper.firstElementChild.appendChild(resume);
    resume.textContent = obj.resume;
    resume.classList.add('resume');
}

/***********************************************/
/***********STICKY EFFECT ON THE NAVBAR*********/
let nav = document.querySelector('nav');
let upperNav = document.querySelector('.media');
let upperNavHeight = window.getComputedStyle(upperNav).getPropertyValue('height');
window.addEventListener('scroll',stick);

function stick(){
    if(window.scrollY > upperNav.offsetTop){
        document.body.classList.add('stick-the-nav');
    }
    else{
        document.body.classList.remove('stick-the-nav');
    }
}
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
    popWindow.classList.add('pop-up-window-hidden')
    mainContainer.classList.remove('pop-up');
}






    





    
