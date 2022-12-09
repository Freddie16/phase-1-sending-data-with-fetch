// Add your code here
const submitData = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify({
        name: "Fred",
        email: "fred@example.com",
        
})
}

fetch("http://localhost:3000/users",submitData)
   .then(res => res.json())
   .then(data => {
    console.log(data)
   })
   .catch(error => console.log(error))
