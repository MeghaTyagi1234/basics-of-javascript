// for (let i = 0; i < 10; i++) {
//     let element = i;
//     if(i==5){
//         console.log("5 is the best number");
//     }
//     console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop ${i}`)
//     for (let j = 0; j <= 10; j++) {
//         console.log(i + '*' + j + '=' + i * j)
//     }
// }

// let myArray = ["apple", "banana", "pineapple", "grapes"];
// for (let i = 0; i <myArray.length; i++) {
//     console.log(myArray[i]);
// }


//-----------------forEach-----------------
let myArray2=['apple', 'banana', 'pineapple', 'grapes'];
myArray2.forEach((fruit)=>{
console.log(fruit);
})


//-------------------example 2-----------------

let array=[
    {
        name:"megha tyagi",
        age:22
    },
    {
        name:"sejal tyagi",
        age:29
    },
    {
        name:"aashu tyagi",
        age:23
    },
    {
        name:"prajwal tyagi",
        age:25
    }
]

array.forEach((item)=>{
console.log(item.age);
})