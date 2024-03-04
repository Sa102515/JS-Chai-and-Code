class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get password(){
        return `${this._password}@123`.toUpperCase();
    }
    set password(value){
        this._password = value;
    }
}

const user1 = new User("sajan@123","abc")
console.log(user1.password)