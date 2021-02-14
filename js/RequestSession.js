/**************** Case user try to connect **********/
class Login{
    constructor(email, password,randomId){
        this.email    = email;
        this.password = password;
        this.error = null;
        this.randomId = randomId;
        this.checkUser();
    }
    async checkUser(){
        let initResquest = {
            method  : 'POST',
            headers : {
                         "content-type" : 'application/json'
                      },
            body    : JSON.stringify({
                       "email"   : this.email,
                       "password": this.password
                     })         
        }
        let reponse = await fetch('https://simplonews.brianboudrioux.fr/users/login',initResquest);
        let data = await reponse.json()
        if(reponse.status === 200)
        {
            new InstanciateArticles(data.token,this.randomId)
            //document.location.href = '../html/home.html'
            return data.token;
        }
        else
        {
            document.querySelector('#error-text').textContent = data.error;
        }
    }
}

/**************************************/
/********** Case user sign up ********/
class SignUp{
    constructor(firstName, lastName, email,password,randomId){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.token = '';////////////////////////////////////////////
        this.randomId = randomId;
        this.userSignUp();
    }
    async userSignUp(){
        let requestConfig = {
                            method: 'POST',
                            headers: {
                                "content-type": 'application/json'
                            },
                            body:JSON.stringify({
                                    "firstName": this.firstName,
                                    "lastName":  this.lastName,
                                    "email": this.email,
                                    "password": this.password
                            })
                            }
        let response = await fetch('https://simplonews.brianboudrioux.fr/users', requestConfig);
        let data = await response.json();
        if(response.status === 200){
            console.log("coucou")
            alert('Congratulation '+ this.firstName);
            this.logToGetToken();
        }

        else
        {
            document.querySelector('#error-text').textContent = data.error.errors[0].message;
        }
    }
    /*******log the new user in to get the token**** */
    async logToGetToken()
    {
          console.log("signup");
          /***stop l'execution du code tant que this.token n'a pas reçu la valeur... */
          /****ça marche car on est dans une fonction async */
          this.token = await new Login(this.email, this.password).checkUser();
          new InstanciateArticles(this.token,this.randomId);
    }
}

/********************** Class to initialize articles on load ****** */
class InstanciateArticles{
        constructor(token, id){
            this.token = token;
            this.id = id;
            this.error = null ;
            this.loadingArticles()
        }
        async loadingArticles(){
            let init = {
                        method :'GET',
                        headers:{
                                "content-type" :'application/json',
                                'Authorization': "Bearer "+ this.token
                                }
                            };
            let reponse = await fetch(`https://simplonews.brianboudrioux.fr/articles/category/${this.id}`,init);   
            let data = await reponse.json();
            if(reponse.status === 200)
            {
                console.log(data.article[0])
               
                createArticle(data.article[0].titre, data.article[0].resume, data.article[0].contenu, data.article[0].author, data.article[0].image,this.id)
            }    
            else
            {
                document.querySelector('#error-text').textContent = data.error;
            }
        }
}

/******************************** */
/******************************** */
let forms = Array.from(document.querySelectorAll('form'));
let firstName = document.querySelector('#firstName');
let lastName = document.querySelector('#lastName');
let email = document.querySelector('#email');
let password = document.querySelector('#password');

forms.forEach(form =>form.addEventListener('submit', (e) =>{
    e.preventDefault();
     
    
    switch(forms.indexOf(form)){
        
        case 0: //case login
            console.log('submit')
            new Login(email.value,password.value, 1);
            break;

         case 1 : 
            console.log('signUp');
            new SignUp(firstName.value, lastName.value, email.value, password.value, 1)
            break;
        default : 
            return 'non ça passe pas!'    
    }
}))


