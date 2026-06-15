class User {
    constructor(name, age, password) {
        this.name = name;
        this.age - age;
        this.password = password;
    }
    encryptedpassword() {
        return ` ${this.password}abc`
    }
}
const chai = new User("megha", 21, 1234);
console.log(chai.encryptedpassword());