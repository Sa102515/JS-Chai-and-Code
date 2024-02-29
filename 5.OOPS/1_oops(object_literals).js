const user = {
    username : "Sajan",
    Id : 2111981223,
    Semester : 6,
    Hosteler : true,

    getUserDetails:function(){
        console.log(`Username: ${this.username}`);

        console.log(this);
    }
}
console.log(user.getUserDetails());
console.log(user.Id)
// this is a empty Object.
console.log(this)