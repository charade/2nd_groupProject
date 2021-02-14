/***** every page loading we want the field to be cleared*/
let allTextField = Array.from(document.querySelectorAll(".field"));
window.onload = ()=>{
    console.log('loaded')
    allTextField.forEach((field,i,arr) => arr[i].value='')
}

/*************************Js for main login animation****************/
/***********Animation for error message box****** */

/***************Animation carte login/sign up************************/
let container  = document.querySelector('#container');
let faceLogin  = document.querySelector("#face-login,header h3");
let faceSignUp = document.querySelector('#face-sign-up');
let ombre = document.querySelector('#ombre');
/******on veut faire transition sur les label correspondants au champ cliqué***/

//left arrow en cliquant on veut revenir en arrière
let backArrow = faceSignUp.querySelector('span');
backArrow.addEventListener('click',flipBack);

/*****s'inscrire ?*****/
let lienSignUp = document.querySelector('h4');
lienSignUp.addEventListener('click',flip);

//écouteur sur chacun des champs de texte des formulaires
let allLabels    = Array.from(document.querySelectorAll('label'));


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
