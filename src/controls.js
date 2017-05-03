'use strict';

class Controls {

	constructor(hoursInput, minutesInput, activePeriodButton) {
		this.hours              = hoursInput;
		this.minutes            = minutesInput;
		this.activePeriodButton = activePeriodButton 
	}

	setActivePeriodButton(button) {
		const activeButtonClass = 'alarm__row__periodButton--active';
		this.activePeriodButton.classList.remove(activeButtonClass);
		button.classList.add(activeButtonClass);
		this.activePeriodButton = button;
	}

	setInputClass(valid, input) {
		const validInputClass   = 'alarm__row__input--active';
		const invalidInputClass = 'alarm__row__input--invalid'; 
		if (valid) {
			input.classList.remove(invalidInputClass);
			input.classList.add(validInputClass);
		}
		else {
			input.classList.remove(validInputClass);
			input.classList.add(invalidInputClass);
		}
	}

}

export default Controls;
