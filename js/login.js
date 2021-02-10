/*************************Js for main login animation****** */
/***************Animation carte login/sign up************************/
let container  = document.querySelector('#container');
let faceLogin  = document.querySelector("#face-login");
let faceSignUp = document.querySelector('#face-sign-up');
let ombre = document.querySelector('#ombre');
/*********on veut faire transition sur les label correspondants au champ cliqué */
let allLabels    = Array.from(document.querySelectorAll('label'));


//left arrow en cliquant on veut revenir en arrière
let backArrow = faceSignUp.querySelector('span');
backArrow.addEventListener('click',flipBack);

/*****s'inscrire ?*****/
let lienSignUp = document.querySelector('h4');
lienSignUp.addEventListener('click',flip);

//écouteur sur chacun des champs de texte des formulaires
let allTextField = Array.from(document.querySelectorAll(".field"));
allLabels.forEach(label => label.addEventListener('click',ecrire));

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

function ecrire(e){
    this.classList.add('label-up');
    allTextField[allLabels.indexOf(e.target)].style.backgroundColor = 'white'; 
}

function shadowMove(e){
    e.preventDefault()
    if(e.propertyName === 'transform'){
        ombre.classList.remove('mouvement--ombre');
    }
    
}
console.log(ombre)
// console.log(allTextField)
/********************************************************************/
