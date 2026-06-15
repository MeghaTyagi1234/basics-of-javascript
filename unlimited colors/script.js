const randomColor = (() => {
    let hex = '0123456789ABCDEF';
    color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
        console.log(color);
    }
    return color;
})
const startChangingColor = (function () {
let intervalId;

    const colorInterval = (function () {
        document.body.style.backgroundColor = randomColor();
    })
    if(!intervalId){
    intervalId = setInterval(() => {
        colorInterval();
    }, 2000)
    }
})
const stopChangingColor = (function () {
    clearInterval(intervalId);
})
document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);