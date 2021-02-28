/***** every page loading we want the fields to be cleared*/


/******for the flipping card**** */
let container  = document.querySelector('#container');
let faceLogin  = document.querySelector("#face-login,header h3");
let faceSignUp = document.querySelector('#face-sign-up');
let ombre = document.querySelector('#ombre');

let errorBox = document.querySelector('.error-box')

let backArrow = faceSignUp.querySelector('span');
let lienSignUp = document.querySelector('h4');

/**********to check a user****** */
let forms = Array.from(document.querySelectorAll('form'));
let firstName = document.querySelector('#firstName')
let lastName = document.querySelector('#lastName')
let email = document.querySelector('#email')
let password = document.querySelector('#password')


let allTextField = Array.from(document.querySelectorAll(".field"));
let allLabels    = Array.from(document.querySelectorAll('label'));
window.onload = ()=>{
    console.log('loaded')
    allTextField.forEach((_,i,arr) => arr[i].value='')
}
/*************************Js for main login animation****************/

/***********Animation for error message box****** */


/****pause before removing the error from th user view */
function endErrorTime(){
      setTimeout( ()=> errorBox.classList.remove('show-error'),4000)
}
/****we add error text in a dynamic way the we wait 3s before removing the error box */
function errorBoxScene(error){
    errorBox.firstElementChild.textContent = error
    errorBox.classList.add('show-error');
    errorBox.addEventListener('transitionend',(e) =>{
        if(e.propertyName === 'transform'){
            endErrorTime();
        }
    })
}

/***************Animation carte login/sign up************************/

/******on veut faire transition sur les label correspondants au champ cliqué***/

//left arrow en cliquant on veut revenir en arrière

backArrow.addEventListener('click',flipBack);
lienSignUp.addEventListener('click',flip);

//écouteur sur chacun des champs de texte des formulaires


allLabels.forEach((label,i) =>{
    //if the user click on an input field border it's still working
    let clickable = label //&& allTextField[i];
    clickable.addEventListener('click',(e) =>{
    console.log(e)    
    label.classList.add('label-up');
    allTextField[i].style.backgroundColor = 'white';})
})
/*******juste pour éviter la répétition entre flip et flipback */
function mkInvisible(){
    faceLogin.classList.toggle('invisible');
    faceSignUp.classList.toggle('invisible');
}
function flip(){
   container.classList.add('flip');
   setTimeout(mkInvisible,340);
   ombre.classList.add('mouvement--ombre')
   container.addEventListener('transitionend',shadowMove)
}
function flipBack(){
    container.classList.remove('flip');
    setTimeout(mkInvisible,400);
    ombre.classList.add('mouvement--ombre')
    container.addEventListener('transitionend',shadowMove)
}
function ecrire(){
    this.classList.add('label-up');
    allTextField[allLabels.indexOf(this)].style.backgroundColor = 'white'; 
}
function shadowMove(e){
    e.preventDefault()
    if(e.propertyName === 'transform'){
        ombre.classList.remove('mouvement--ombre');
    }  
}
/********************************************************************/
/**************** Login/Sign Up ********************* */     
/****Soit l'utilisateur s'inscrit soit il essaie de se connecter */

forms.forEach((form,i) => form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let firstName = document.querySelector('#firstName')
    let lastName = document.querySelector('#lastName')
    let email = document.querySelector('#email')
    let password = document.querySelector('#password')
    //soit l'utilisateur se connecte(login)--> case 0 soit il s'inscrit case1
    switch(i){
        case 0 : (async function(id){
            let init = {
                       method:'POST',
                       headers:{
                           "content-type":'application/json'
                       },
                       body:JSON.stringify({
                           "email":email.value,
                           "password" : password.value
                       })
            }
            let reponse = await fetch('https://simplonews.brianboudrioux.fr/users/login',init);
            let data = await reponse.json();
            if(reponse.status === 200)
            {
                document.location.href = 'https://charade.github.io/2nd_groupProject/html/home.html';
            }
            else
            {
            /***the error box appear to the user for 3s i doesn't need to click on to make disappear*** */
              errorBoxScene(data.error)
            }
        })()

        case 1:(async function(id){
            let init = {
                       method:'POST',
                       headers:{
                           "content-type":'application/json'
                       },
                       body:JSON.stringify({
                         "firstName":firstName.value,
                         "lastName":lastName.value,
                         "email":email.value,
                         "password" :password.value
                    })
            }
            console.log(email.value)
            let reponse = await fetch('https://simplonews.brianboudrioux.fr/users',init);
            let data = await reponse.json();
            if(reponse.status == 200)
            {
                https://charade.github.io/2nd_groupProject/html/home.html
                document.location.herf = 'https://charade.github.io/2nd_groupProject/html/home.html';
                return false;
            }
            else
            {
                /////////////////////////Gestion d'erreurs
                errorBoxScene(data.error.errors[0].message);
            }
        })()
    }
}))

        
            
         