const Chai = {
    name:"Ginger chai",
    price:250,
    isAvailable:true
}

for(let [Key,value] of Object.entries(Chai)) {
    console.log(`${Key} ; ${value}`)
}


console.log(Object.getOwnPropertyDescriptor(Math,"PI"))
