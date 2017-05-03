'use strict';

import Alarm from './alarm';
import AlarmsView from './alarmsView';
import { hoursAreValid, minutesAreValid } from './utility';

class Controller {

	constructor(app, clock, display, controls, alarms) {
		this.alarmClock   = app;
		this.clock        = clock;
		this.displayView  = display;
		this.controlsView = controls;
		this.alarmsView   = alarms;
	}

	// Updtes the App, Display, and Clock once every second
	appUpdater(date) {
		this.clock.setDate(date);
		this.alarmClock.setClock(this.clock);
		this.displayView.setTime(this.clock);
		if (this.clock.getSeconds() === 0) {
			this.alarmClock.checkIfAlarmShouldRing();
		}
	}

	// Sets a click listener on the active period button and sets the active period in the alarmClock app
	addPeriodButtonListeners(periodButtons) {
		periodButtons.forEach((button) => {
			button.addEventListener('click', (event) => {
				event.preventDefault();
				this.controlsView.setActivePeriodButton(event.target);
				this.alarmClock.setPeriod(event.target.value);
			});
		});
	}

	addControlsFormListener(controlsForm) {
		controlsForm.addEventListener('submit', (event) => {
			event.preventDefault();
			const hours = parseInt(event.target.hourInput.value, 10);
			if (hoursAreValid(hours)) {
				this.controlsView.setInputClass(true, event.target.hourInput);
			}
			else {
				this.controlsView.setInputClass(false, event.target.hourInput);
			}
			const mins = parseInt(event.target.minuteInput.value, 10);
			if (minutesAreValid(mins)) {
				this.controlsView.setInputClass(true, event.target.minuteInput);
			}
			else {
				this.controlsView.setInputClass(false, event.target.minuteInput);
			}
			const period   = this.alarmClock.period;
			const newAlarm = new Alarm(hours, mins, period);
			if (newAlarm.valid()) {
				this.alarmClock.addAlarm(newAlarm);
				this.alarmsView.addAlarm(newAlarm);
			}
			else {
				this.alarmsView.showError();
			}
		});
	}

}

export default Controller;
