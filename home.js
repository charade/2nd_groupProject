//ARTICLES COULISSANT//

/*1/pseudo code:

   on doit récupérer les données qui nous intéressent à savoir:
  _le header
  _les articles

  au click la hauteur des articles augmente à 100% et les articles deviennent visibles*/


/*2/Récupération des données:

/**section ou l'on récupère nos éléments header et articles */

let firstSection = document.querySelector('section')
let SecondSection = document.querySelector('.container').children[1]
let thirdSection = document.querySelector('.container').children[2]

/*element ou l'on clique**/
let firstHeader = firstSection.children[0]
let secondHeader = SecondSection.children[0]
let thirdHeader = thirdSection.children[0]

/**articles qui coulissent lorsque l'on clique */
let firstArticles = firstSection.children[1]
/**/ 
let secondArticles = SecondSection.children[1]
/**/ 
let thirdArticles = thirdSection.children[1]

console.log(firstArticles)


//3/Fonction:

 firstHeader.addEventListener('click', function(){

        firstArticles.style.height ='100%'
        firstArticles.style.overflow = 'visible'
        firstArticles.style.transition = '4s'

        //console.log('lol')
  })

  secondHeader.addEventListener('click', function(){

    secondArticles.style.height ='100%'
    secondArticles.style.overflow = 'visible'
    secondArticles.style.transition = '4s'

    //console.log('lol')
})

   thirdHeader.addEventListener('click', function(){

    thirdArticles.style.height ='100%'
    thirdArticles.style.overflow= 'visible'
    thirdArticles.style.transition = '4s'

    //console.log('lol')
})

///STICKY CATEGORIES///

//quand une catégorie touche la nav alors on lui assigne la propriété fixed nav à la catégories

let fixedCategorie 