'use strict'

import ringer from './ringer';

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
