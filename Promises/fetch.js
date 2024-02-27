fetch('https://api.github.com/users/hiteshchoudhary')
.then(function(response)  {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))