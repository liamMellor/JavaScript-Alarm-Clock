'use strict';

class ControlsView {

	constructor(hoursInput, minutesInput, activePeriodButton) {
		this.hours              = hoursInput;
		this.minutes            = minutesInput;
		this.activePeriodButton = activePeriodButton 
	}

	setActivePeriodButton(button) {
		const activeButtonClass = 'controls__row__periodButton--active';
		this.activePeriodButton.classList.remove(activeButtonClass);
		button.classList.add(activeButtonClass);
		this.activePeriodButton = button;
	}

	setInputClass(valid, input) {
		const validInputClass   = 'controls__row__input--active';
		const invalidInputClass = 'controls__row__input--invalid'; 
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

export default ControlsView;
