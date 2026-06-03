////////////// this keyword in arrow function //////////////
const user = {
    name: "john",
    age:22,
    message:function(){
        console.log(`Hi! ${this.name} ,are you welcome`)
    }
}
user.message();

//+++++++++++++++++++++++ IIFE(Immediately Invoked Function Expressions) +++++++++++++++++++++++
(function chai(){
console.log("DB Connected Successfully");
})();