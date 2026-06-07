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
let myArray2 = ['apple', 'banana', 'pineapple', 'grapes'];
myArray2.forEach((fruit) => {
    // console.log(fruit);
})


//-------------------example 2-----------------

let array = [
    {
        name: "megha tyagi",
        age: 22
    },
    {
        name: "sejal tyagi",
        age: 29
    },
    {
        name: "aashu tyagi",
        age: 23
    },
    {
        name: "prajwal tyagi",
        age: 25
    }
]

array.forEach((item) => {
    // console.log(item.age);
})

//--------------------filter()-----------------
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res = numbers.filter((num) => {
    return num > 8;
})
// console.log(res);
// console.log(numbers);

let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res1 = numbers1.filter((nums) => {
    return nums > 8;
})
// console.log(res1);
// console.log(numbers);

let myNums = [];
numbers1.forEach((num) => {
    if (num > 8) {
         myNums.push(num);
    }
})
// console.log(myNums);

//-------------------examples-----------------
let books=[
    {
        title:'book1',
        genre:'fiction',
        publish:1920
    },
    {
        title:'book2',
        genre:'history',
        publish:1930
    },
    {
        title:'book3',
        genre:'physics',
        publish:1940
    },
    {
        title:'book4',
        genre:'fiction',
        publish:1970
    },
    {
        title:'book5',
        genre:'biography',
        publish:1980
    },
    {
        title:'book6',
        genre:'history',
        publish:1990
    },

]

let userBook=books.filter((book)=>book.genre==='fiction')
// console.log(userBook)

books.forEach((book)=>{
if(book.genre==='fiction'){
    return book;
}
})
console.log(books);