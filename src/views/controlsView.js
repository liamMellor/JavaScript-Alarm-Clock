'use strict';

/*
*	@param hoursInput (HTML element)
*	@param minutesInput (HTML element)
*	@param activePeriodButton (HTML element)
*/
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
		let baseClass           = 'controls__row__input--';
		const validInputClass   = `${baseClass}active`;
		const invalidInputClass = `${baseClass}invalid`; 
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
