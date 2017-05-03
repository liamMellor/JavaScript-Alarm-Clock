'use strict';

import Alarm from './alarm';
import { hoursAreValid, minutesAreValid } from './utility';

class Controller {

	constructor(app, clock, display, controls) {
		this.alarmClock = app;
		this.clock      = clock;
		this.display    = display;
		this.controls   = controls;
	}

	// Updtes the App, Display, and Clock once every second
	appUpdater(date) {
		this.clock.setDate(date);
		this.alarmClock.setClock(this.clock);
		this.display.setTime(this.clock);
	}

	// Sets a click listener on the active period button and sets the active period in the alarmClock app
	addPeriodButtonListeners(periodButtons) {
		periodButtons.forEach((button) => {
			button.addEventListener('click', (event) => {
				event.preventDefault();
				this.controls.setActivePeriodButton(event.target);
				this.alarmClock.setPeriod(event.target.value);
			});
		});
	}

	addAlarmFormListener(alarmForm) {
		alarmForm.addEventListener('submit', (event) => {
			event.preventDefault();
			const hours = parseInt(event.target.hourInput.value, 10);
			if (hoursAreValid(hours)) {
				this.controls.setInputClass(true, event.target.hourInput);
			}
			else {
				this.controls.setInputClass(false, event.target.hourInput);
			}
			const mins = parseInt(event.target.minuteInput.value, 10);
			if (minutesAreValid(mins)) {
				this.controls.setInputClass(true, event.target.minuteInput);
			}
			else {
				this.controls.setInputClass(false, event.target.minuteInput);
			}
			const period   = this.alarmClock.period;
			const newAlarm = new Alarm(hours, mins, period);
			if (newAlarm.valid()) {
				this.alarmClock.addAlarm(newAlarm);
			}
			else {
				console.log('invalid alarm');
			}
		});
	}

}

export default Controller;
