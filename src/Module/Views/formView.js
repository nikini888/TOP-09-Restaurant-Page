import { View } from './view.js'
import { FormValidator } from '../Help/validateForm'
import { MAXDAYFORRESERVATION } from '../Help/config.js'

class formView extends View {
    _parentEl = ''

    _generationMarkup(data) {
        return `
        <div class="form__main">
            <form id="reservationForm">
                <div class="form__item name-field">
                        <label for="name" class="secondary__text">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your name"required>
                        <span class="require error" id="nameError"></span>
                </div>
                <div class="form__item phone-field">
                        <label for="phone" class="secondary__text">Phone</label>
                        <p class="secondary__text">for reservation confirmation only</p>
                        
                        <input type="text" class="mask" data-pattern="(000) 000-00-00" id="phone" name="phone"/>
                        <span class="require error" id="phoneError"></span>
                </div>
                <div class="form__item--group">
                    <div class="form__item">
                            <label for="date" class="secondary__text">Date</label>
                            <input type="date" id="date" name="date" placeholder="Date you'll come"required>
                            <span class="require error" id="dateError">Errrrrrrrrrrrrrrrrrrr</span>
                    </div>
                    <div class="form__item">
                        <label for="guests" class="secondary__text">Number of Guests</label>
                        <div class="form__item__guests">
                            <button type="button" class="btn-number increase">&#45;</button>
                            <input type="number" id="guests" name="guests" min="1" value="2" required>
                            <button type="button" class="btn-number decrease">&#43;</button>
                        </div>
                        <span class="require error" id="guestsError">Errrrrrrrrrrrrrrrrrrr</span>
                    </div>
                </div>
                <div class="form__item">
                    <label for="time" class="secondary__text">Time</label>
                    <p class="secondary__text">open 5:00pm to 11:00pm</p>
                    <div class="form__item__time">
                        <span class="text">Within</span>
                        <input type="number" id="time-within" name="time-within" value="15" step="15" min="15" max="60" required>
                        <span class="text text-of">of</span>
                       
                        <input type="text" class="mask" data-pattern="00:00" id="time" name="time"/>
                        <span class="text">pm</span>
                    </div>
                    <span class="require error" id="timeError">Errrrrrrrrrrrrrrrrrrr</span>
                </div>
            </form>
        <button type="button"class="btn btn--primary btn--larger reserve__btn"  data-nav="reserve">Make a reservation</button>
        </div>
        `
    }
    _toggleClearFieldButton = (input) => {
        input.addEventListener('focus', (e) => {
            const parentEl = input.parentElement
            if (input.value !== '') {
                parentEl.style.position = 'relative';
            } else parentEl.style.position = 'static';
        })
    }
    _addMasksToInput() {
        import('../Help/inputMask.js').then(({ masks }) => {
        })
    }
    _setUpInput() {
        const currentDate = new Date();
        const currentTime = new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });

        const inputName = document.getElementById('name');
        const inputPhone = document.getElementById('phone');
        const inputDate = document.getElementById('date');
        const inputTime = document.getElementById('time');
        const inputGuests = document.getElementById('guests');

        const maxDay = (days) => {
            let result = new Date();
            result.setDate(result.getDate() + days)
            return result;
        }

        inputDate.min = currentDate.toISOString().split('T')[0];
        inputDate.max = maxDay(MAXDAYFORRESERVATION).toISOString().split('T')[0] // Set your desired maximum date here

        inputTime.min = currentTime;
        inputTime.max = '10:30'; // Set your desired maximum time here

        const checkForm = () => {
            this.formValidator = new FormValidator();

            this.formValidator._checkInputField(
                this._validation, inputName, inputPhone, inputDate, inputTime, inputGuests
            );
        }
        this._addMasksToInput()
        checkForm()
    }

    _validation(input) {
        const validationOptions = [
            {
                attribute: 'required',
                isValid: input => input.value.trim() !== '',
                errorMessage: input => ['name', 'phone'].includes(input.name) ?
                    `Please enter your ${input.name}` : `Please select a ${input.name}`,
            }
        ];
        for (const option of validationOptions) {
            if (input.parentElement.querySelector('.require').hasAttribute(option.attribute) && !option.isValid(input)) {
                return option.errorMessage(input);
            }
        }
        return '';
    }
    _getFormData() {
        const inputs = [inputName, inputphone, inputDate, inputTime, inputGuests];

        inputs.forEach(input => {
            this._clearInput(input);
        });
    }
    _clearInput(input) {
        input.parentElement.querySelector('.require').style.visibility = 'visible'
        input.value = ''
        if (input.name === 'guests') input.value = '2'
    }


}

export default new formView()
// <input type="phone" id="phone" name="phone" placeholder="Your phone number"required>
 // <input type="number" id="time" name="time" placeholder="Time you'll come"required>