export class FormValidator {
  constructor() {
    this.inputsWithError = new Set();
  }
  get hasError() {
    return this.inputsWithError.size > 0;
  }
  _checkInputField(check, ...inputs) {
    const iconInvalid = `<span class="material-symbols-rounded warning input__icon error"> error </span>`;
    const addErrorMess = input => {
      const validation = check(input);
      input.parentElement.querySelector('.require').innerText = validation

      if (!validation) {
        input.parentElement.querySelector('.require').style.visibility = 'hidden'
        this.inputsWithError.delete(input);
      } else {
        input.parentElement.querySelector('.require').style.visibility = 'visible'
        this.inputsWithError.add(input);
      }
    };
    inputs.forEach(input => {
      input.addEventListener('change', _ => addErrorMess(input));
    });
    inputs.forEach(input => {
      input.addEventListener('blur', _ => addErrorMess(input));
    });
  }
}