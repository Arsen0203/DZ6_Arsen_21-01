// Задание 1

// let span;
// function f() { span.innerText = this.innerText + 1 }
// [...document.querySelectorAll('span')].forEach(e => {
//     if(e.parentElement.nodeName == 'BUTTON') e.parentElement.addEventListener('click', f);
//     else span = e;
// });


// Задание 2

// document.querySelector('#coordinates').onmousemove = function (event) {
//     event = event || window.event;
//     document.querySelector('#coorX').innerHTML = event.offsetX;
//     document.querySelector('#coorY').innerHTML = event.offsetY;
//
// }



// Задание 3
// Я не смог сделать светофор который будет менять цвета с помощью
// диалогового окна.

// let lights = document.getElementsByClassName('light')
// let red = lights[0]
// let yellow = lights[1]
// let green = lights[2]
// let body111 = document.getElementsByTagName('body')
//
// function fooRed() {
//
//     this.style.background = 'red'
//     yellow.style.background = ''
//     green.style.background = ''
// }
//
// function fooYellow() {
//     this.style.background = 'yellow'
//     red.style.background = ''
//     green.style.background = ''
// }
//
// function fooGreen() {
//     this.style.background = 'green'
//     yellow.style.background = ''
//     red.style.background = ''
// }
//
// red.addEventListener('click', fooRed)
// yellow.addEventListener('click', fooYellow)
// green.addEventListener('click', fooGreen)