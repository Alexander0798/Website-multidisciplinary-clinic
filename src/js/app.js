import * as flsFunction from "./modules/function.js";
import { Slide } from "./components/Slide.js";
flsFunction.isWebp();
const data = [
    {
        id: 1,
        check: "check-up",
        floor: "для мужчин",
        services: "Гормональный скрининг; Тестостерон; Свободный тестостерон; Глобулин, связывающий половые гормоны;",
        price: 2800,
        old_price: 3500,
        img: "../img/slide-img/slide-img_1.jpg",
    },
    {
        id: 2,
        check: "check-up2",
        floor: "для мужчин",
        services: "Гормональный скрининг; Тестостерон; Свободный тестостерон; Глобулин, связывающий половые гормоны;",
        price: 2800,
        old_price: 3500,
        img: "../img/slide-img/slide-img_1.jpg",
    },
    {
        id: 3,
        check: "check-up3",
        floor: "для мужчин",
        services: "Гормональный скрининг; Тестостерон; Свободный тестостерон; Глобулин, связывающий половые гормоны;",
        price: 2800,
        old_price: 3500,
        img: "../img/slide-img/slide-img_1.jpg",
    },
    {
        id: 4,
        check: "check-up4",
        floor: "для мужчин",
        services: "Гормональный скрининг; Тестостерон; Свободный тестостерон; Глобулин, связывающий половые гормоны;",
        price: 2800,
        old_price: 3500,
        img: "../img/slide-img/slide-img_1.jpg",
    },
    {
        id: 5,
        check: "check-up5",
        floor: "для мужчин",
        services: "Гормональный скрининг; Тестостерон; Свободный тестостерон; Глобулин, связывающий половые гормоны;",
        price: 2800,
        old_price: 3500,
        img: "../img/slide-img/slide-img_1.jpg",
    },
];
const page = document.querySelector(".page");
const slideTemplate = document.querySelector("#template-slide");
const slideSelector = ".slide";
const buttonBurger = page.querySelector(".header__burger");
const navigate = page.querySelector(".nav");
const burgerLine = buttonBurger.querySelector(".header__burger-line");
const slideContainer = page.querySelector(".slider__container");
const currentSlide = page.querySelector("#current-slide");
const totalSlides = page.querySelector("#total-slides");

const buttonSlideNext = page.querySelector("#button-next");
const buttonSlideBack = page.querySelector("#button-back");

buttonBurger.addEventListener("click", () => {
    burgerLine.classList.toggle("header__burger-line_active");
    navigate.classList.toggle("nav_active");
});

let slideIndex = 0;

const renderSlide = (transform) => {
    const slide = new Slide(slideTemplate, slideSelector, data[slideIndex]);
    slideContainer.append(slide.generateSlide());
    currentSlide.textContent = slideIndex + 1;
    totalSlides.textContent = `/${data.length}`;
    if (transform) {
        transform()
    }
};
renderSlide();

buttonSlideNext.addEventListener("click", () => {
    const slideElement = page.querySelector(".slide");
    slideElement.style.transform = "translateX(-200%)";
    slideElement.style.transition = "transform 0.5s";
    slideIndex = ++slideIndex;
    if (slideIndex >= data.length) {
        slideIndex = 0;
    }
    setTimeout(() => {
        slideContainer.innerHTML = "";
        renderSlide(() => {
            const slideElement = page.querySelector(".slide");
            slideElement.style.transform = "translateX(200%)";
            slideElement.style.transition = "transform 0.5s";
        });
        setTimeout(() => {
            const slideElement = page.querySelector(".slide");
            slideElement.style.transform = "translateX(0)";
        }, 50);
    }, 300);
});
buttonSlideBack.addEventListener("click", () => {
    const slideElement = page.querySelector(".slide");
    slideElement.style.transform = "translateX(200%)";
    slideElement.style.transition = "transform 0.5s";
    slideIndex = slideIndex - 1;
    console.log(slideIndex);
    if (slideIndex < 0) {
        slideIndex = data.length - 1;
    }
    setTimeout(() => {
        slideContainer.innerHTML = "";
        renderSlide(() => {
            const slideElement = page.querySelector(".slide");
            slideElement.style.transform = "translateX(-200%)";
            slideElement.style.transition = "transform 0.5s";
        });
        setTimeout(() => {
            const slideElement = page.querySelector(".slide");
            slideElement.style.transform = "translateX(0)";
        }, 50);
    }, 300);
});
