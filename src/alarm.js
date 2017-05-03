'use strict';

import { hoursAreValid, minutesAreValid } from './helpers/utility';

class Alarm {

	constructor(hours, minutes, period) {
		this.hours   = hours;
		this.minutes = minutes;
		this.period  = period;
	}

	/*
	*	Accepts the current Clock object to check current hours, minutes, and period against.
	*	@parm Clock (object Clock)
	*	@parm period (string period)
	*/
	shouldRing(Clock, period) {
		return this.period === period && this.hours === Clock.getHours() && this.minutes === Clock.getMinutes();
	}

	valid() {
		return hoursAreValid(this.hours) && minutesAreValid(this.minutes) && this.period;
	}

}

export default Alarm;
