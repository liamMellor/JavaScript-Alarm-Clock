'use strict'

class AlarmClock {

	constructor(clock) {
		this.clock  = clock;
		this.alarms = [];
	}

	setClock(clock) {
		this.clock = clock;
	}

	addAlarm(alarm) {
		this.alarms.push(alarm);
	}

}

export default AlarmClock;
