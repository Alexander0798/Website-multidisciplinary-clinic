import * as flsFunction from './modules/function.js'
flsFunction.isWebp()

const page = document.querySelector('.page')
const buttonBurger = page.querySelector('.header__burger')
const navigate = page.querySelector('.nav')
const burgerLine = buttonBurger.querySelector('.header__burger-line')
buttonBurger.addEventListener('click', () => {
    burgerLine.classList.toggle('header__burger-line_active')
    navigate.classList.toggle('nav_active')   
})
console.log('Hi')