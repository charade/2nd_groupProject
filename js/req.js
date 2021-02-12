
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjQ2LCJmaXJzdE5hbWUiOm51bGwsImxhc3ROYW1lIjpudWxsLCJlbWFpbCI6InRlc3RAZ21haWwuZnIiLCJwYXNzd29yZCI6IiQyYiQxMCRTUTNXOEl2ZkIvTFVPRE1lMTUvWGtPb2taLng4aC5YYzBPVXNOajlNYjN0N1JicWlmNXNaYSIsImNyZWF0ZWRBdCI6IjIwMjEtMDItMTFUMjA6MDU6MzQuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDItMTFUMjA6MDU6MzQuMDAwWiIsImlhdCI6MTYxMzA3NDExM30.hG5RrsA5qnVFmLhnJ9s_f5MuTfVT_bGVuEGgyPG9dHs"

/**retreive all  new user***/

let fetch_conf = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
    },
}

fetch("https://simplonews.brianboudrioux.fr/users", fetch_conf)

    .then(function (response) {

        if (response.status == 403) {

            console.log("erreur")
        }
        else {
            response.json()

                .then(function (users) {

                    console.log(users)

                })
                .catch(function (error) {

                    console.log(error)
                })

        }
    })

    .catch(function (errors) {
        console.log(errors)
    })
  
/***/
let fetchPostUsers = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({

        "firstName": "fraises",
        "lastName": "tata",
        "email": "fraises@gmail.com",
        "password": "unsupermotdepasse"
        
        })

    
}

fetch("https://simplonews.brianboudrioux.fr/users", fetchPostUsers)

    .then(function (response) {

        if (response.status == 400) {

            console.log("erreur")
        }
        else {
            response.json()

                .then(function (user) {

                    console.log(user)

                })
                .catch(function (error) {

                    console.log(error)
                })

        }
    })

    .catch(function (errors) {
        console.log(errors)
    })

/****Login** */


let fetchPostUsersLoginConf = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",

    body: JSON.stringify({

        "email": "becks@test.fr",
        "password": "yesPapa"
        
        })

    },
}

fetch("https://simplonews.brianboudrioux.fr/users/login", fetchPostUsersLoginConf)

    .then(function (response) {

        if (response.status == 400) {

            console.log("erreur")
        }
        else {
            response.json()

                .then(function (users) {

                    console.log(users)

                })
                .catch(function (error) {

                    console.log(error)
                })

        }
    })

    .catch(function (errors) {
        console.log(errors)
    })

/***/

let fetch_config = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        "firstName": "rebecca",
        "lastName": "ramalho",
        "email": "becks@test.fr",
        "password": "yesPapa",
    })
}
fetch("https://simplonews.brianboudrioux.fr/users", fetch_config)

    .then(function (response) {

        if (response.status == 403) {

            console.log("erreur")
        }
        else {
            response.json()

                .then(function (users) {

                    console.log(users)

                })
                .catch(function (error) {

                    console.log(error)
                })


        }
    })

    .catch(function (errors) {
        console.log(errors)
    })

/*****Articles*****/

let fetch_con = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
    },
}

fetch("https://simplonews.brianboudrioux.fr/articles", fetch_con)

    .then(function (response) {

        if (response.status == 403) {

            console.log("erreur")
        }
        else {
            response.json()

                .then(function (articles) {

                    console.log(articles)

                })
                .catch(function (error) {

                    console.log(error)
                })

        }
    })

    .catch(function (errors) {
        console.log(errors)
    })


/***/

let fetchPostArticles = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
    },
    body: JSON.stringify({
        "title": "Un super title",
        "resume": "ici on la fait courte",
        "content": "un gros paver de texte si necessaire why not",
        "author": "mr toutlemonde",
        "img": "https://urldunsitequihebergeuneimage.fr/uneimage.jpg",
        "category_id": "3"
    })
}
fetch("https://simplonews.brianboudrioux.fr/articles", fetchPostArticles)

    .then(function (response) {

        if (response.status == 403) {

            console.log("erreur")
        }
        else {
            response.json()

                .then(function (articles) {

                    console.log(articles)

                })
                .catch(function (error) {

                    console.log(error)
                })


        }
    })

    .catch(function (errors) {
        console.log(errors)
    })
/*********Category****/

let fetchGetAr = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
    },
}

fetch("https://simplonews.brianboudrioux.fr/categories/3", fetchGetAr)

    .then(function (response) {

        if (response.status == 403) {

            console.log("erreur")
        }
        else {
            response.json()

                .then(function (categories) {

                    console.log(categories)

                })
                .catch(function (error) {

                    console.log(error)
                })

        }
    })

    .catch(function (errors) {
        console.log(errors)
    })

