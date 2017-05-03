'use strict'

import ringer from './helpers/ringer';

/*
*	@parm Clock (object Clock)
*	Main applicaiton object
* 	Maintains alarms and current controls period.
*/
class AlarmClock {

	constructor(clock) {
		this.clock  = clock;
		this.alarms = [];
		this.period = 'pm';
	}

	setClock(clock) {
		this.clock = clock;
	}

	setPeriod(period) {
		this.period = period;
	}

	addAlarm(alarm) {
		this.alarms.push(alarm);
	}

	checkIfAlarmShouldRing() {
		this.alarms.forEach((alarm) => {
			if (alarm.shouldRing(this.clock, this.period)) {
				ringer();
			}
		});
	}

}

export default AlarmClock;
