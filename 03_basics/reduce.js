let numbers = [1, 2, 3, 4, 5, 6];
let totalValue = numbers.reduce((acc, currVal) => {
    return acc + currVal;
}, 0)
// console.log(totalValue)

//QUESTION 1:- Find Maximum Number

let array = [10, 44, 90, 45];
let maxValue = array.reduce((accumulator, currentValue) => {
    return currentValue > accumulator ? currentValue : accumulator;
}, 0);
// console.log(maxValue);

//QUESTION 2:-Count Total Price

let 