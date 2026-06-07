function loginUser(username) {
    return `my name is ${username}`;
}
console.log(loginUser("sejal tyagi"));

//rest operator(spread operator)

function addToCart(val1, val2, ...num) {
    return [val1, val2, ...num];
}
console.log(addToCart(100, 200, 300, 400));

//array
const myArray = [100, 200, 400, 300];
function newSecondArray(getArray) {
    return getArray[1];
}
console.log(newSecondArray(myArray));


//closure

function one() {

    let username = "megha tyagi";

    function two() {
        console.log(username);
    }

    two();
}
one();

//+++++++++++++++++++++++  Hoisting  +++++++++++++++++++++++
console.log((addOne("jokey")));
function addOne(username) {
    return username;
}


console.log(addTwo("sejal"));
const addTwo = function (name) {
    return name;

}
