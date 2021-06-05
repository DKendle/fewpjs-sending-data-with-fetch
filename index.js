// Add your code here
const configObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        name: "Steve",
        email: "steve@steve.com"
    })

}

function submitData(name, email){
  return fetch("http://localhost:3000/users", configObj)
    .then(function(response){
        return response.json()
    })
    .then(function(json){
        console.log(JSON.parse(json))
    })
}