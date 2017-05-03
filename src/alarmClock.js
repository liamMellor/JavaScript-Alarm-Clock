'use strict'

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
		console.log(alarm);
		this.alarms.push(alarm);
	}

	checkIfAlarmShouldRing() {
		this.alarms.forEach((alarm) => {
			if (alarm.shouldRing(this.clock, this.period)) {
				// Ringger.ring()
				console.log('ring');
			}
		});
	}

}

export default AlarmClock;
