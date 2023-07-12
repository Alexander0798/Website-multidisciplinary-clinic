import { Popup } from "./Popup.js";

export class PopupFormRecord extends Popup {
    constructor({ popupSelector, popupForm, popupInputClass, handleSubmit }) {
        super(popupSelector);
        this._form = popupForm;
        this._handleSubmit = handleSubmit;
        this._inputList = Array.from(this._form.querySelectorAll(popupInputClass));
    }
    _getInputValue() {
        const data = {};
        this._inputList.forEach((input) => {
            data[input.name] = input.value;
        });
        return data;
    }
    close() {
        super.close();
        this._form.reset();
    }
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleSubmit(this._getInputValue());
        });
    }
}
