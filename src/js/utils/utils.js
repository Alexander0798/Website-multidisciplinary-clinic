export const data = [
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

export const root = document.querySelector(".root");
export const slideTemplate = root.querySelector("#template-slide");
export const buttonBurger = root.querySelector(".header__burger");
export const navigate = root.querySelector(".nav");
export const burgerLine = buttonBurger.querySelector(".header__burger-line");
export const slideContainer = root.querySelector(".slider__container");
export const currentSlide = root.querySelector("#current-slide");
export const totalSlides = root.querySelector("#total-slides");
export const popupRecordSelector = root.querySelector(".popup");
export const buttonSlideNext = root.querySelector("#button-next");
export const buttonSlideBack = root.querySelector("#button-back");
export const buttonsRecords = Array.from(root.querySelectorAll(".button-record"));

export const popupRecordForm = root.querySelector(".popup__form");

export const configValidationRecord = {
    formSelector: popupRecordForm,
    inputClass: ".popup__input",
    errorMessageClass: ".popup__error",
    labelClass: ".popup__label",
    inputClassError: "popup__input_error",
    buttonDisabledClass: "popup__button_disabled",
};
