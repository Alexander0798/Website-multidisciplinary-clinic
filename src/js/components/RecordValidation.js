export class RecordValidation {
    constructor({ formSelector, inputClass, errorMessageClass, labelClass, inputClassError, buttonDisabledClass }) {
        this.form = formSelector;
        this.inputTel = formSelector.tel;
        this.inputName = formSelector.name;
        this.inputEmail = formSelector.email;
        this.buttonSubmit = formSelector.buttonSubmit;
        this.errorMessageClass = errorMessageClass;
        this.inputClassError = inputClassError;
        this.labelClass = labelClass;
        this.inputClass = inputClass;
        this.buttonDisabledClass = buttonDisabledClass;
        this.regexTel = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;
        this.regexEmail =
            /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        this.isValid = false;
    }
    _hasInvalidInputs() {
        if (
            this.regexTel.test(this.inputTel.value) &&
            this.inputName.value.length > 2 &&
            (this.regexEmail.test(this.inputEmail.value.toLowerCase()) || !this.inputEmail.value.length)
        ) {
            return true;
        } else {
            return false;
        }
    }
    _checkValid(formInput) {
        if (formInput === this.inputTel) {
            if (!this.regexTel.test(formInput.value) && formInput.value.length) {
                return this._showErrorMessage(this.inputTel, "Не корректный номер телефона");
            }
            if (formInput.value === "") {
                return this._showErrorMessage(formInput, "Обязательное поле для заполнения");
            }
            return this._hideErrorMessage(formInput);
        }
        if (formInput === this.inputName) {
            if (formInput.value === "") {
                return this._showErrorMessage(formInput, "Обязательное поле для заполнения");
            }
            if (formInput.value.length < 2) {
                return this._showErrorMessage(formInput, "Минимальное количество симвалов: 2");
            }
            this._hideErrorMessage(formInput);
        }
        if (formInput === this.inputEmail) {
            if (!this.regexEmail.test(formInput.value.toLowerCase()) && formInput.value !== "") {
                return this._showErrorMessage(formInput, "Не корректный email");
            } else {
                return this._hideErrorMessage(formInput);
            }
        }
    }
    toggleButtonState() {
        if (!this._hasInvalidInputs()) {
            this.buttonSubmit.setAttribute("disabled", true);
            this.buttonSubmit.classList.add(this.buttonDisabledClass);
        } else {
            this.buttonSubmit.removeAttribute("disabled");
            this.buttonSubmit.classList.remove(this.buttonDisabledClass);
        }
    }
    _getErrorElement(formInput) {
        return formInput.closest(this.labelClass).querySelector(this.errorMessageClass);
    }
    _showErrorMessage(formInput, errorMessage) {
        const errorElement = this._getErrorElement(formInput);
        formInput.classList.add(this.inputClassError);
        errorElement.textContent = errorMessage;
    }
    _hideErrorMessage(formInput) {
        const errorElement = this._getErrorElement(formInput);
        formInput.classList.remove(this.inputClassError);
        errorElement.textContent = "";
    }
    resetForm() {
        this.inputList.forEach((input) => {
            this._hideErrorMessage(input);
        });
    }
    enableValidation() {
        this.inputList = Array.from(this.form.querySelectorAll(this.inputClass));
        this.toggleButtonState();
        this.inputList.forEach((input) =>
            input.addEventListener("input", (evt) => {
                this._checkValid(evt.target);
                this.toggleButtonState();
            })
        );
    }
}
