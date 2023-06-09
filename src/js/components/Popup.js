export class Popup {
    constructor(popupSelector) {
        this._popup = popupSelector;
    }

    open() {
        this._popup.classList.add("popup_active");
        document.addEventListener("keydown", this._handleEscClose);
    }

    close() {
        this._popup.classList.remove("popup_active");
        document.removeEventListener("keydown", this._handleEscClose);
    }

    _handleEscClose = (evt) => {
        // закрыть попап нажатием на "Escape"
        if (evt.key === "Escape") {
            this.close();
        }
    };
    setEventListeners() {
        this._popup.addEventListener("mousedown", (evt) => {
            // закрыть попапа нажатием на крестик или оверлей
            if (evt.target.classList.contains("popup") || evt.target.classList.contains("popup__button-close")) {
                this.close();
            }
        });
    }
}
