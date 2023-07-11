export class Slide {
    constructor(slideTemplate, slideSelector, slideData) {
        this.slideSelector = slideSelector;
        this.slideTemplate = slideTemplate;
        this.slideId = slideData.id;
        this.slideCheck = slideData.check;
        this.slideFloor = slideData.floor;
        this.slidePrice = slideData.price;
        this.slideOldPrice = slideData.old_price;
        this.slideImg = slideData.img
        this.slideServices = slideData.services
            .split(";")
            .filter((item) => Boolean(item))
            .map((item) => {
                return `<li class="slide__item">${item}</li>`;
            });
    }
    _getTemplate() {
        const slideElement = this.slideTemplate.content.querySelector(this.slideSelector).cloneNode(true);
        return slideElement;
    }
    generateSlide() {
        this.element = this._getTemplate();
        this.img = this.element.querySelector(".slide__img");
        this.title = this.element.querySelector(".slide__title");
        this.subTitle = this.element.querySelector(".slide__subtitle");
        this.list = this.element.querySelector('.slide__list')
        this.price = this.element.querySelector('.slide__price')
        this.oldPrice = this.element.querySelector('.slide__old-price')

        this.element.id =  this.slideId
        this.title.textContent = this.slideCheck
        this.subTitle.textContent = this.slideFloor
        this.price.textContent = `Всего ${this.slidePrice}₽`
        this.oldPrice.textContent = `${this.slideOldPrice}₽`
        this.img.src = this.slideImg
        this.img.alt = this.title
        this.price.append(this.oldPrice)
        this.slideServices.forEach(element => {
           this.list.insertAdjacentHTML('beforeend', element) 
        });
        return this.element
    }
}
