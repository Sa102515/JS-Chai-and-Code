// function UserInfo(Username,Id,Hosteler){
//     this.Username = Username;
//     this.Id = Id;
//     this.Hosteler = Hosteler;
// }

// const user = UserInfo("Sajan",1223,true)
// console.log(user);
function UserInfo(Username, Id, Hosteler) {
    this.Username = Username;
    this.Id = Id;
    this.Hosteler = Hosteler;
}


const user = new UserInfo("Sajan", 1223, true);
console.log(user);
