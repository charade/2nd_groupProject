/*var accessTokenObj = JSON.parse(localStorage.getItem("Token:"));
console.log(accessTokenObj);
*/
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjQ2LCJmaXJzdE5hbWUiOm51bGwsImxhc3ROYW1lIjpudWxsLCJlbWFpbCI6InRlc3RAZ21haWwuZnIiLCJwYXNzd29yZCI6IiQyYiQxMCRTUTNXOEl2ZkIvTFVPRE1lMTUvWGtPb2taLng4aC5YYzBPVXNOajlNYjN0N1JicWlmNXNaYSIsImNyZWF0ZWRBdCI6IjIwMjEtMDItMTFUMjA6MDU6MzQuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDItMTFUMjA6MDU6MzQuMDAwWiIsImlhdCI6MTYxMzA3NDExM30.hG5RrsA5qnVFmLhnJ9s_f5MuTfVT_bGVuEGgyPG9dHs"

let fetch_conf= {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
    },
}

fetch("https://simplonews.brianboudrioux.fr/categories", fetch_conf)
 
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

            console.log("success")
        }
    })

    .catch(function (errors) {
        console.log(errors)
    })


/*

let fetch_config = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
    },
    body: JSON.stringify({
        "title": "Découvrez la nouvelle formation Apple!",
        "resume": "Simplon lance un nouveau partenariat avec Apple...",
        "content": "Les candidatures pour la formation ouvrent le  20 décembre 2021.Les candidatures pour la formation ouvrent le  20 décembre 2021.Les candidatures pour la formation ouvrent le  20 décembre 2021.",
        "author": "mr Bean",
        "img": "https://urldunsitequihebergeuneimage.fr/uneimage.jpg",//
        "category_id": "3"//
    })
}
fetch("https://simplonews.brianboudrioux.fr/articles", fetch_config)
    .then(function (response) {
        response.json()
            .then(function (data) {
                if (response.status == 403) {
                    console.log(data)
                }
                else {
                    console.log(data)
                }

            })
            .catch(function (error) {
                console.log(error)
            })

    })

    .catch(function (errors) {
        console.log(errors)
    })

*/