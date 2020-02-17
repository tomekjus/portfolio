console.log('test')


const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const bgc1 = document.querySelector('.portfolio-bgc');
const bgc2 = document.querySelector('.about-bgc');
const bgc3 = document.querySelector('.contact-bgc');
const bgc4 = document.querySelector('.social-bgc');


function transformOne() {
	bgc1.classList.toggle('bgc--active');
    btn1.classList.toggle('btn--active');
};

function transformTwo() {
    bgc2.classList.toggle('bgc--active');
    btn2.classList.toggle('btn--active');
}

function transformThree() {
    bgc3.classList.toggle('bgc--active');
    btn3.classList.toggle('btn--active');
}

function transformFour() {
    bgc4.classList.toggle('bgc--active');
    btn4.classList.toggle('btn--active');
}


btn1.addEventListener('click', transformOne);
btn2.addEventListener('click', transformTwo);
btn3.addEventListener('click', transformThree);
btn4.addEventListener('click', transformFour);
