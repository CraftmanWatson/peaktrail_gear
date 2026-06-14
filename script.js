const navBtn = document.querySelector('.navBtn');
const navScreen = document.querySelector('.nav');
const home = document.querySelector('.hero');
const products = document.querySelector('.products');
const abt = document.querySelector('.about');
const form = document.querySelector('.form');

const homeBtn = document.querySelector('.homeBtn');
const productsBtn = document.querySelector('.ProductsBtn');
const abtBtn = document.querySelector('.AboutBtn');
const formBtn = document.querySelector('.ContactBtn');
const homeBtnB = document.querySelector('.logo');
const productsBtnB = document.querySelector('.hero-CTA');

navBtn.addEventListener('click', function() {
    navScreen.classList.toggle("active");
});
homeBtn.addEventListener('click', function() {
    home.scrollIntoView({behavior: "smooth"});
    navScreen.classList.remove("active");
})
productsBtn.addEventListener('click', function() {
    products.scrollIntoView({behavior: "smooth"});
    navScreen.classList.remove("active");
})
abtBtn.addEventListener('click', function() {
    abt.scrollIntoView({behavior: "smooth"});
    navScreen.classList.remove("active");
})
formBtn.addEventListener('click', function() {
    form.scrollIntoView({behavior: "smooth"});
    navScreen.classList.remove("active");
})
homeBtnB.addEventListener('click', function() {
    home.scrollIntoView({behavior: "smooth"});
    navScreen.classList.remove("active");
})
productsBtnB.addEventListener('click', function() {
    products.scrollIntoView({behavior: "smooth"});
    navScreen.classList.remove("active");
})