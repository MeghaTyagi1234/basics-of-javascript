let PromiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("hello megha");
        resolve();
    }, 1000)

})
PromiseOne.then(() => {
    // console.log("hello sejal");
})
//second way 
let promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("async 2")
        resolve();    //--this is very important 
    }, 2000)
}).then(() => {
    // console.log("async 2 consumed");
})

//--Third way
let promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "megha", age: 22, location: "muradnagar" })
    }, 1000)
}).then((user) => {
    // console.log(user);
})

//--Fourth way
let promiseFourth = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            console.log("async 4 resolve");
            resolve({ username: "sejal", age: 21, gender: "female" });
        } else {
            // console.log("Something went wrong");
        }
    }, 1000)
})
.then((user) => {
    console.log(user);
    return user.username;
})
.then((username) => {
    // console.log(username);
})
.catch((err) => {
    // console.log(err);
})

// async function greet() {
//    return "Hello";
// }

// console.log(greet());
