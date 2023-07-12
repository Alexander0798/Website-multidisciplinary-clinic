import * as flsFunction from "./modules/function.js";
import { Slide } from "./components/Slide.js";
import { PopupFormRecord } from "./components/PopupFormRecord.js";
import { RecordValidation } from "./components/RecordValidation.js";
import {
    data,
    root,
    slideTemplate,
    buttonBurger,
    navigate,
    burgerLine,
    slideContainer,
    currentSlide,
    totalSlides,
    popupRecordSelector,
    buttonSlideNext,
    buttonSlideBack,
    buttonsRecords,
    popupRecordForm,
    configValidationRecord,
} from "./utils/utils.js";

flsFunction.isWebp();

let slideIndex = 0;

buttonBurger.addEventListener("click", () => {
    burgerLine.classList.toggle("header__burger-line_active");
    navigate.classList.toggle("nav_active");
});

const popupFormRecord = new PopupFormRecord({
    popupSelector: popupRecordSelector,
    popupForm: popupRecordForm,
    popupInputClass: ".popup__input",
    handleSubmit: (data) => {
        console.log(data);
        popupFormRecord.close();
    },
});
popupFormRecord.setEventListeners();

const recordValidation = new RecordValidation({ ...configValidationRecord });

recordValidation.enableValidation();

buttonsRecords.forEach((button) =>
    button.addEventListener("mousedown", () => {
        popupFormRecord.open();
        recordValidation.resetForm();
    })
);

const renderSlide = (transform) => {
    const slide = new Slide(data[slideIndex], {
        slideTemplate: slideTemplate,
        slideClass: ".slide",
        handleRecord: () => {
            popupFormRecord.open();
            recordValidation.resetForm();
        },
    });
    slideContainer.append(slide.generateSlide());
    currentSlide.textContent = slideIndex + 1;
    totalSlides.textContent = `/${data.length}`;
    if (transform) {
        transform();
    }
};
renderSlide();

const transformSlide = (position) => {
    const slideElement = root.querySelector(".slide");
    slideElement.style.transform = `translateX(${position})`;
    slideElement.style.transition = "transform 0.5s";
};
const newSlide = (startPosition) => {
    setTimeout(() => {
        slideContainer.innerHTML = "";
        renderSlide(() => {
            transformSlide(startPosition);
        });
        setTimeout(() => {
            transformSlide("0");
        }, 50);
    }, 300);
};
buttonSlideNext.addEventListener("click", () => {
    transformSlide("-200%");
    slideIndex = ++slideIndex;
    if (slideIndex >= data.length) {
        slideIndex = 0;
    }
    newSlide("200%");
});
buttonSlideBack.addEventListener("click", () => {
    transformSlide("200%");
    slideIndex = slideIndex - 1;
    if (slideIndex < 0) {
        slideIndex = data.length - 1;
    }
    newSlide("-200%");
});
