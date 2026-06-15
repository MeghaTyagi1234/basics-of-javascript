class user {
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }
    get password() {
        return this._password
    }
    set password(value) {
        return this._password = value;
    }
}
let info = new user("megha", 1234);
console.log(info);