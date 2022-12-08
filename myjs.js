var sec = 0;
var min = 0;
var hr = 0;

var d = new Date();
const sechnd = document.querySelector('.sec');
const hrhnd = document.querySelector('.hour');
const minhnd = document.querySelector('.min');
setInterval(() => {
    d = new Date();
    sec = d.getSeconds() * 6;
    min = d.getMinutes() * 6;
    hr = d.getHours() * 30;
    sechnd.style.transform = "translateY(-65px) rotate(" + sec + "deg)";
    minhnd.style.transform = "translateY(20px) rotate(" + min + "deg)";
    hrhnd.style.transform = "translateY(-65px) rotate(" + hr + "deg)";
}, 1000)