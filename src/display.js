'use strict';

import { convertToDoubleDigit } from './utility';

class Display {

	/*
	*	Display accepts HTML elements making up the clock's display
	*	@parm hoursElement
	*	@param minutesElement
	*	@param periodElement
	*/
	constructor(hoursElement, minutesElement, periodElement) {
		this.hours   = hoursElement;
		this.minutes = minutesElement;
		this.period  = periodElement
	}

	setTime(Clock) {
		this.setHours(convertToDoubleDigit(Clock.getHours()));
		this.setMinutes(convertToDoubleDigit(Clock.getMinutes()));
		this.setPeriod(Clock.getPeriod());
	}

	setHours(hours) {
		this.hours.value = hours;
	}

	setMinutes(minutes) {
		this.minutes.value = minutes;
	}

	setPeriod(period) {
		this.period.value = period;
	}

}

export default Display;
