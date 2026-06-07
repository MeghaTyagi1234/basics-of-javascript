// function three(){
//     return three();
// }

// three();  //output:-Maximum call stack size exceeded

function One(){
    console.log("One")
}
function Two(){
    console.log("Two")
}
function Three(){
    console.log("Three")
}

One()
Two()
Three()

