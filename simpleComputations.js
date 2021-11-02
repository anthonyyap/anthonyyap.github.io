const f = document.querySelector('.fah');
const c = document.querySelector('.cels');
const convert = document.querySelector('.convert');
const reset = document.querySelector('.reset');

convert.addEventListener('click', getCels);

function getCels() {
    let ans = ((f.value - 32) * 5 ) / 9;
    c.innerText = Math.round(ans * 100) / 100;
}

reset.addEventListener('click', function(){
    c.innerText = 0;
    f.value = "";
})

//Celsius to Fahrenheit
const f2 = document.querySelector('.fah2');
const c2 = document.querySelector('.cels2');
const convert2 = document.querySelector('.convert2');
const reset2 = document.querySelector('.reset2');

convert2.addEventListener('click', function(){
    let ans = ((c2.value * 9) / 5) + 32;
    f2.innerText = Math.round(ans * 100) / 100;
})

reset2.addEventListener('click', function(){
    f2.innerText = 0;
    c2.value = "";
})

//Meters to feet
const meter1 = document.querySelector('.meterInput');
const feet1 = document.querySelector('.feet1');
const convert3 = document.querySelector('.convert3');
const reset3 = document.querySelector('.reset3');

convert3.addEventListener('click', function(){
    let ans = meter1.value * 3.281;
    feet1.innerText = Math.round(ans * 100) / 100;
})

reset3.addEventListener('click', function(){
    feet1.innerText = 0;
    meter1.value = "";
})

//Feet to meters
const meter2 = document.querySelector('.meter2');
const feet2 = document.querySelector('.feetInput');
const convert4 = document.querySelector('.convert4');
const reset4 = document.querySelector('.reset4');

convert4.addEventListener('click', function(){
    let ans = feet2.value / 3.281;
    meter2.innerText = Math.round(ans * 100) / 100;
})

reset4.addEventListener('click', function(){
    meter2.innerText = 0;
    feet2.value = "";
})
