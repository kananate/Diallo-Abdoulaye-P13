const server = 'http://localhost:3001/'


function getAPIUserData(uri){
    return fetch(server + uri)
        .then(response => response.json())
        .then(response => response.data)

}
console.log(getAPIUserData())