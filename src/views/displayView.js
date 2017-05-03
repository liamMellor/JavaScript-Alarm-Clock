'use strict';

import { convertToDoubleDigit } from '../helpers/utility';

class DisplayView {

	/*
	*	Display accepts HTML elements making up the clock's display
	*	@parm hoursElement (HTML element)
	*	@param minutesElement (HTML element)
	*	@param seconds Element (HTML element)
	*	@param periodElement (HTML element)
	*/
	constructor(hoursElement, minutesElement, secondsElement, periodElement) {
		this.hours   = hoursElement;
		this.minutes = minutesElement;
		this.seconds = secondsElement;
		this.period  = periodElement;
	}

	/*
	* Accepts current clock object to set elements to current time
	* @param Clock (object Clock)
	*/
	setTime(Clock) {
		this.setContent(this.hours, convertToDoubleDigit(Clock.getHours()))
		this.setContent(this.minutes, convertToDoubleDigit(Clock.getMinutes()))
		this.setContent(this.seconds, convertToDoubleDigit(Clock.getSeconds()))
		this.setContent(this.period, Clock.getPeriod())
	}

	setContent(prop, value) {
		prop.innerHTML = value;
	}

}

export default DisplayView;
