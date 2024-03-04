function SetUsername(username) {
    this.username = username;
}

function createUser(username, id, hosteler) {
    SetUsername.call(this, username);
    this.id = id;
    this.hosteler = hosteler;
}
const user = new createUser("Sajan", 2111981223, true);
console.log(user);
